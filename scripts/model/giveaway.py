import gspread
import hashlib
import re
from google.oauth2 import service_account

# This script manages a giveaway system using Google Sheets to store user data and generate referral links.
class Giveaway:
    def __init__(self, credentials_file, spreadsheet_name, base_url):
        self.scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
        self.credentials = service_account.Credentials.from_service_account_info(credentials_file, scopes=self.scope)
        self.client = gspread.authorize(self.credentials)
        self.spreadsheet = self.client.open(spreadsheet_name).sheet1
        self.base_url = base_url
    
    def user_exists(self, email: str) -> bool:
        try:
            cell = self.spreadsheet.find(email)
            return cell is not None
        except gspread.exceptions.CellNotFound:
            return False
    
    def create_referral_link(self, email: str)-> str:
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            print(f"Invalid email format: {email}")
            return None
        # Create a unique referral code using a hash of the email
        referral_code = hashlib.sha256(email.encode()).hexdigest()[:10] 
        referral_link = f"{self.base_url}?ref={referral_code}"
        return referral_link
        
    def add_user(self, email: str, first_name: str, last_name: str):
        
        if self.user_exists(email):
            print(f"User with email {email} already exists.")
            return False
        referral_link = self.create_referral_link(email)
        print(f"Generated referral link: {referral_link}")
        if not referral_link:
            print("Failed to create referral link.")
            return False
        try:
            self.spreadsheet.append_row([first_name, last_name, email, referral_link])
            print(f"User {first_name} {last_name} added successfully. Referral link: {referral_link}")
            # Optionally, you can return the referral link or any other information
            return True
        except Exception as e:
            print(f"An error occurred while adding user: {e}")
            return False

    
    def get_user_by_referral_code(self, referral_link: str):
        try:
            cell = self.spreadsheet.find(referral_link)
            if cell:
                row = self.spreadsheet.row_values(cell.row)
                return {
                    "first_name": row[0],
                    "last_name": row[1],
                    "email": row[2],
                    "referral_link": row[3]
                }
            else:
                print("Referral code not found.")
                return None
        except gspread.exceptions.APIError as e:
            print(f"Referral code not found. {e}")
            return None

    
    def update_user_referral_points(self, referral_link: str, points: int=1):
        try:
            cell = self.spreadsheet.find(referral_link)
            if cell:
                row = self.spreadsheet.row_values(cell.row)
                current_points = int(row[4]) if len(row) > 4 else 0
                new_points = current_points + points
                self.spreadsheet.update_cell(cell.row, 5, new_points)
                print(f"Updated referral points for {row[0]} {row[1]}: {new_points}")
                return True
            else:
                print("Referral code not found.")
                return False
        except gspread.exceptions.APIError as e:
            print(f"Error updating referral points: {e}")
            return False