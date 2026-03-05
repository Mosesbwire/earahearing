import pandas as pd
import os

class ShopifyCustomerData:

    """Class to handle Shopify customer data in CSV format."""

    def __init__(self, csv_file: str):
        """Initialize with the path to the CSV file."""
        self.csv_file = csv_file
        self.data = None

    def load_data(self):
        """Load data from the CSV file into a DataFrame."""
        try:
            file_path = os.path.join(os.getcwd(), self.csv_file)
            print(f"Loading data from {file_path}")
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"The file {self.csv_file} does not exist.")
            self.data = pd.read_csv(file_path)
            print(f"Data loaded successfully from {self.csv_file}")
        except FileNotFoundError:
            print(f"Error: The file {self.csv_file} was not found.")
        except Exception as e:
            print(f"Error loading data: {e}")
    
    def get_giveaway_entries(self):
        """Get giveaway entries from the DataFrame."""
        if self.data is not None:
            return self.data[
                self.data['Tags'].apply(
                    lambda tags: 'giveaway-july' in [t.strip() for t in tags.split(',')] if pd.notnull(tags) else False
                )
            ]
        else:
            print("Data not loaded. Please load the data first.")
            return None

    def get_subscribers_not_in_giveaway(self):
        """Get subscribers who have accepted marketing but are NOT tagged with 'giveaway-july'."""
        if self.data is not None:
            return self.data[
                (self.data['Accepts Email Marketing'] == 'yes') &
                (~self.data['Tags'].apply(
                    lambda tags: 'giveaway-july' in [t.strip() for t in tags.split(',')] if pd.notnull(tags) else False
                ))
            ]
        else:
            print("Data not loaded. Please load the data first.")
            return None

    def get_subscribers_bio_data(self, dataFrame):
        """Get subscribers' bio data."""
        if dataFrame is not None:
            return dataFrame[['First Name', 'Last Name', 'Email']].to_dict(orient='records')
        
        return None
            