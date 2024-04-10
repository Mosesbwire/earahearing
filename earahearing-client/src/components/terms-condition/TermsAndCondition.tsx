
import closeBtn from '../../assets/close-btn.svg'
import './terms.css'
type termsProps = {
    clickHandler: () => void
}

const TermsCondition = ({ clickHandler }: termsProps) => {
    return (
        <div className='conditions'>
            <div className="conditions-header">
                <div>
                    <h1 className='text text-dark headline'>Terms & Conditions</h1>
                </div>
                <div onClick={clickHandler} className='terms-close-btn-wrapper'>
                    <img src={closeBtn} alt="close button"  className='close-terms'/>
                </div>
            </div>
            <div className="conditions-wrapper mrg-t">
                <p>Eara Hearing Corporation ("Eara Hearing," "we," or "us") is the owner and operator of the website www.earahearing.com and its associated pages, as well as Eara Hearing's mobile applications, and corresponding social media pages (collectively referred to as the "Sites"). The following Terms and Conditions govern the use of the Sites, including our products and services offered, provided, or sold, as well as any information obtained from Eara Hearing through various communication channels. Therefore, any mention of the "Sites" in these Terms and Conditions includes such products, services, information, and communications from or with Eara Hearing. By accessing or using the Sites, or any information, products, or services from the Sites, you agree to adhere to and comply with these Terms and Conditions.</p>
                <p className='mrg-t'>We retain the right to decline service, cease transactions, terminate accounts, or cancel orders or subscriptions at our discretion. Our services are exclusively offered for products acquired through the Eara Hearing website or authorized retail partners. Eara Hearing is not obligated to provide services to customers who have obtained its products through unauthorized or illegitimate means. You are responsible for any fees, charges, duties, or taxes incurred from using this website or the services, which may fluctuate over time. Your account information and other relevant details about you are governed by and subject to our privacy policy and, if applicable, your rental agreement.</p>
                <p className='mrg-t'>Unauthorized use of this website and/or its materials may infringe upon copyright, trademark, or other intellectual property laws, as well as other relevant regulations. Therefore, we reserve our rights, and in the event of any detected violation or infringement, we will take appropriate legal action.</p>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>We reserve the right to:</h2>
                    <p className='mrg-t'>Modify or withdraw the website (or any part thereof) temporarily or permanently, with or without prior notice. You acknowledge that we shall not be liable to you or any third party for any modifications or withdrawals of the website.</p>
                    <p className='mrg-t'>Change, amend, modify, add to, or remove these Terms periodically. Your continued use of the website (or any part thereof) and/or the Services following such changes shall constitute your acceptance of the modified Terms. Any changes to these Terms will be effective upon being posted on this website. It is your responsibility to regularly check for any updates to the Terms. If you do not agree to any changes, you must immediately cease using the website or Services.</p>
                    <p className='mrg-t'>We will make reasonable efforts to keep the website operational. Nonetheless, we do not assume responsibility for any data loss. Please note that the website may undergo changes periodically. You will not be entitled to compensation in the event that you are unable to access any portion of the website, or if the website experiences failure, suspension, or partial withdrawal due to circumstances beyond our control.</p>

                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Permitted Use of the Sites:</h2>
                    <p className='mrg-t'>Eara Hearing does not sell products or services to minors, and individuals under the age of eighteen (18) are prohibited from using the Sites.</p>
                    <p className='mrg-t'>Subject to these Terms and Conditions, Eara Hearing grants you a limited, non-exclusive, non-transferable right to access and utilize the Sites. This includes downloading, installing, and running our mobile applications solely on your personal mobile devices. The purpose of this access is to learn about Eara Hearing's products and services, schedule and conduct online hearing assessments, place orders, communicate with our Sales, Customer Support, and Audiology Teams, and utilize any other functionality, information, and services offered through the Sites. Your use of our mobile application is subject to the terms and conditions of the relevant application store from which you downloaded the app, such as Apple's App Store, Google Play, or similar sources. Eara Hearing retains all rights in the Sites, and except as expressly provided herein, no rights or licenses are granted or implied regarding the Sites or any other intellectual property of Eara Hearing.</p>
                    <p className='mrg-t'>The Sites may not be used for purposes that violate any applicable laws or regulations or contradict these Terms and Conditions. You agree not to: (i) reverse engineer, modify, or create derivative works of the Sites; (ii) commercially exploit the Sites; (iii) introduce malware in connection with your use of the Sites; or (iv) remove or alter any proprietary rights notices displayed on the Sites or Eara Hearing's products or services.</p>
                    <p className='mrg-t'>If you post content or comments on the Sites or use Eara Hearing's products or services, you agree to refrain from engaging in unlawful, harassing, abusive, threatening, discriminatory, false, misleading, or objectionable behavior. Your content must not contain malware, commercial or political solicitations, spam, or any unsolicited communications.</p>
                    <p className='mrg-t'>By posting on the Sites or providing any information, photos, images, audio, video, or other content, you grant Eara Hearing a worldwide, royalty-free, perpetual, and irrevocable right to use such content.</p>
                    <p className='mrg-t'>Eara Hearing, operated by Eara Hearing LLC (“we,” “us,” “our,” "Eara Hearing”), a Florida Limited Liability Company, is the owner and/or licensee of this website, the Eara Hearing brand and associated trademarks, as well as the Chat option. Any third-party trademarks featured on this website are the property of their respective owners.</p>
                    <p className='mrg-t'>These Terms outline the agreement between you and Eara Hearing for the provision of our equipment, services, software, subscriptions, online hearing tests, HA FIT APP, hardware, tools, website, know-how, FAQ, or Blog (collectively referred to as the “Help Center”).</p>
                    <p className='mrg-t'>By opting to utilize our Services, you agree to be bound by these Terms and conditions. These Terms are exclusively governed by and interpreted in accordance with the laws of the State of Florida. The Courts of the State of Florida, including both state and federal courts, have exclusive jurisdiction over any dispute, without regard to any choice-of-law or conflict-of-law rules or provisions that may apply the law of any jurisdiction other than the State of Florida.</p>
                    <p className='mrg-t'>Any legal claim against us must be initiated within one year after the claim or cause of action arises. Failure to do so will result in the invalidation of your claim against us. In the event of a claim or cause of action, please forward it to the following email address: <span>info@earahearing.com.</span></p>
                    <p className='mrg-t'>If any provision of these Terms is found to be invalid by a competent court with jurisdiction, the remaining provisions of these Terms will remain in full force and effect. Any waiver included in the Terms will not constitute a continuing waiver of such provision or any other provision.</p>
                    <p className='mrg-t'>You must not utilize our Services, disclose any personal information, or proceed with any purchases through this website unless you fully comprehend, agree to, and accept all of our Terms and Conditions.</p>
                    <p className='mrg-t'>By clicking to finalize a purchase through a one-time payment, you acknowledge the legal obligations that arise, and your entitlement to refunds for payments made via credit card or any other agreed-upon method is subject to our Terms & Conditions.</p>
                    <p className='mrg-t'>Upon completing payment for your purchase, regardless of the payment method used, it is understood that you have carefully read, comprehended, and agreed to abide by the Terms and Conditions.</p>
                    <p className='mrg-t'>Should you have any inquiries, we encourage you to reach out to us before making any purchases for our Services or products through this website.</p>
                    <p className='mrg-t'>Eara Hearing reserves the right to reproduce, publish, display, distribute, modify, exploit, and create derivative works of any content you post on the Sites, subject to any applicable terms outlined in our Privacy Policy.</p>
                    <p className='mrg-t'>In all cases, Eara Hearing retains the right to remove, edit, or block any postings. However, please note that we do not routinely monitor all postings on the Sites. Eara Hearing assumes no responsibility and accepts no liability for content posted by you or any other user of the Sites. Content not posted by Eara Hearing has not been reviewed or approved by us and should not be considered endorsed by Eara Hearing.</p>
                    <p className='mrg-t'>Eara Hearing also reserves the right to refuse service or the sale of products, edit or remove content from the Sites, or terminate any transaction, order, or service at our sole discretion and without prior notice. Our products and services are designed for individuals seeking assistance with hearing loss. While we are committed to fair trade practices, Eara Hearing reserves the right to take action against individuals who falsely present themselves as hearing aid candidates to infringe on our intellectual property rights or appropriate our proprietary information. If Eara Hearing refuses or terminates service to you after a purchase has been made, our "Standard Return Policy". If you are not eligible for a refund under our policies, you may choose to retain your product, but you will no longer be eligible for services that Eara Hearing has refused or terminated.</p>
                    <p className='mrg-t'>Furthermore, Eara Hearing reserves the right, without obligation, to share any information provided by you with law enforcement agencies or credit card companies for fraud investigation purposes. We will cooperate with authorities to prosecute offenders to the fullest extent of the law.</p>
                    <p className='mrg-t'>The Sites may contain links to other websites that contain information we believe may be of interest. Please note that we do not endorse these sites and are not responsible for the content contained therein or any information collected from you while visiting such sites.</p>

                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Privacy Policy</h2>
                    <p className='mrg-t'>Please take a moment to review our Privacy Policy on our website at <a href="https://www.EaraHearing.com/">https://www.EaraHearing.com/</a>. This policy outlines our practices regarding the collection, use, and protection of your data and information online. By using the sites, you acknowledge and agree to abide by these policies.</p>
                    <p className='mrg-t'>By accessing and utilizing this website, making a purchase, or subscribing, you agree to be bound by these Terms, including our Privacy Policy and, where applicable, which govern your use of this site. Your access to and use of this website are conditional upon your acceptance of these Terms.</p>
                    <p className='mrg-t'>You explicitly warrant and agree not to use this website for any activities prohibited by these Terms. You are permitted to use this website solely for browsing its content and making legitimate purchases. You shall not engage in any other activities on this website, including but not limited to making speculative, false, or fraudulent purchases.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Online Hearing Assessment/ No Medical Advice</h2>
                    <p className='mrg-t'>Eara Hearing's Online Hearing Assessment utilizes audio files that are public access. Estimations of the pure tone thresholds are calculated to give users an idea and understanding of their hearing thresholds. The Eara Hearing online hearing test and the hearing test completed in the HA FIT APP are not considered diagnostic assessments. It's essential to note that a hearing aids will not restore normal hearing.</p>
                    <p className='mrg-t'>Eara Hearing emphasizes that the Food and Drug Administration (FDA) recommends a medical evaluation by an audiologist before purchasing a hearing aid. The hearing tests or examinations conducted by Eara Hearing are not medical tests or examinations; they are solely for the purpose of fitting a hearing aid. Some state laws may require certain in-person evaluative elements that cannot be fulfilled by the Online Hearing Assessment.</p>
                    <p className='mrg-t'>Any information obtained through the Sites or from communications with Eara Hearing, including the Online Hearing Assessment and interactions via email or telephone with Eara Hearing personnel, is for informational purposes only. Neither Eara Hearing nor its personnel intend to offer medical or other professional advice. It's crucial to consult your healthcare provider before making any medical decisions. Communications with Eara Hearing, including its personnel, do not establish a doctor-patient or other professional relationship and are not assumed to be subject to patient or other privacy protections, except as explicitly outlined in our Privacy Policy. Additionally, you acknowledge that hearing loss may be linked to conditions that require medical attention, and these should be evaluated by a physician or otolaryngologist. If the Online Hearing Assessment suggests the possibility of a serious condition, you will be advised to consult with a healthcare professional for in-person care.</p>

                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Mobile Applications: HA FIT APP</h2>
                    <p className='mrg-t'>In addition to the terms outlined in these Terms & Conditions, the following terms govern the use of our mobile applications, sometimes referred to as "apps":</p>
                    <p className='mrg-t'>The app is designed to complement a medical device intended for individuals with hearing loss. Specifically engineered for use with Eara Hearing's wireless hearing instruments, the app enhances user functionality and experiences, such as allowing users to self-fit the hearing aids to their own unique hearing loss. This self-fitting function allows users to test their own hearing, based on the users response “unheard” or “heard”, the user is also able to “skip”. As users select “unheard” the volume of a specific frequency will increase slightly, each time “unheard” is selected, the volume increases, until “heard” is selected. Following the completion of the “self-fitting” portion of the APP function is complete, the user will continue to have more options for adjustment of the sound quality. Including, but not limited to: volume control, mode changes, MPO changes, and frequency-bandwidth control (500 Hz, 1000 Hz, 2000 Hz, 3000 Hz, 4000 Hz), noise reduction activation switch and whistle suppression switch are controlled via the APP, for one or both hearing aids. </p>
                    <p className='mrg-t'>The Eara Hearing app communicates with Eara Hearing's wireless hearing instruments via Bluetooth® technology. This allows you to adjust settings on your wireless hearing instrument directly from the app on your compatible smart device. The Bluetooth® word mark and logos are the property of Bluetooth SIG, Inc., and Eara Hearing uses them under license.</p>
                    <p className='mrg-t'>Before utilizing the app, please carefully follow the provided instructions and reach out to Eara Hearing support if assistance is needed.</p>
                    <p className='mrg-t'>Any manual modifications to the fitting parameters will affect the prescribed amplification level, which will be noticeable when the instruments are connected. Individuals sensitive to sounds, such as those experiencing tinnitus or hyperacusis, should exercise caution.Please note that Eara Hearing cannot delete data from any part of the software used for remote fine tuning.If you encounter any issues while using the Eara Hearing app, please contact us or call us at (800) 933-0885.The Eara Hearing app is provided for personal use only.</p>
                    <p className='mrg-t'>To cease the collection of data regarding your app and hearing instrument usage, please uninstall the app following the standard uninstallation procedures outlined in your mobile device's user instructions or through the mobile app marketplace or network.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Updates</h2>
                    <p className='mrg-t'>It is important not to disable notifications for app updates in your mobile device's operating system. We strongly advise installing all updates to ensure proper functionality and keep the app up to date.</p>
                    <p className='mrg-t'>To the maximum extent permitted by applicable law, Eara Hearing hereby disclaims any and all liability arising directly or indirectly from the use of the app.</p>
                    <p className='mrg-t'>Eara Hearing does not guarantee, represent, or warrant that your use of the app with the hearing aids will be uninterrupted or error-free. You acknowledge that Eara Hearing may, from time to time, make adjustments to, and limit access to the APP without prior notice. </p>
                    <p className='mrg-t'>Please consult the user guide accompanying the hearing instrument, as well as the app's help information, for details on intended use, cautions, and warnings. Before using the app, and to ensure proper utilization, we strongly recommend thoroughly acquainting yourself with its functions. You can review the in-depth user manual for a thorough discussion of</p>
                    <p className='mrg-t'>Restriction on Resale of Eara Hearing Products and Services Products and services obtained from the Eara Hearing website are intended for personal use by the individual purchaser and may not be transferred, leased, sold, or distributed to others under any circumstances. Any such transfer or use of the products or services by another individual will void the warranty and other associated policies, and Eara Hearing will not be obligated to provide support or any additional services related to them.</p>

                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>DISCLAIMER OF WARRANTIES</h2>
                    <p className='mrg-t'>EARA HEARING DOES NOT WARRANT THAT THE WEBSITE OR ITS CONTENT, INCLUDING THE ONLINE HEARING ASSESSMENT AND ANY COMMUNICATIONS WITH EARA HEARING PERSONNEL, WILL BE COMPLETELY ACCURATE OR FREE OF ERRORS. YOUR RELIANCE ON ANY INFORMATION PROVIDED ON THE WEBSITE, INCLUDING THE ONLINE HEARING ASSESSMENT, IS AT YOUR OWN RISK. THE INFORMATION PRESENTED ON THE WEBSITE IS NOT INTENDED TO REPLACE THE ADVICE OF A HEALTHCARE PROFESSIONAL. YOU ACKNOWLEDGE THAT HEARING LOSS COULD INDICATE A MORE SERIOUS, POTENTIALLY LIFE-THREATENING CONDITION OR ILLNESS, AND YOU SHOULD SEEK CARE FROM A HEALTHCARE PROFESSIONAL IF YOU HAVE ANY QUESTIONS OR CONCERNS ABOUT YOUR HEALTH.</p>
                    <p className='mrg-t'>EXCEPT AS EXPRESSLY PROVIDED BELOW IN THESE TERMS AND CONDITIONS (SEE WARRANTY PROGRAM, BELOW), THE WEBSITE AND ALL PRODUCTS, SERVICES, AND INFORMATION FROM EARA HEARING ARE PROVIDED TO YOU ON AN "AS IS" BASIS WITHOUT ANY WARRANTY OR GUARANTEE OF ANY KIND, EXPRESS OR IMPLIED. EARA HEARING EXPRESSLY DISCLAIMS ANY AND ALL IMPLIED WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, PRIOR COURSE OF DEALING, AND USAGE OF TRADE. SOME JURISDICTIONS DO NOT ALLOW OR LIMIT THE EXCLUSION OF CERTAIN WARRANTIES, SO THE DISCLAIMERS AND LIMITATIONS ABOVE MAY NOT APPLY TO YOU TO THE EXTENT APPLICABLE LAW REQUIRES.</p>
                    <div className='mrg-t'>
                        <h2 className='text text-dark headline text-bold underline'>LIMITATION OF LIABILITY</h2>
                        <p className='mrg-t'>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EARA HEARING WILL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, OR PUNITIVE DAMAGES OF ANY KIND ARISING IN CONNECTION WITH THESE TERMS AND CONDITIONS OR YOUR ACCESS TO OR USE OF THE WEBSITE (INCLUDING THE ONLINE HEARING ASSESSMENT), OR YOUR PURCHASE OR USE OF ANY PRODUCTS, SERVICES, OR INFORMATION FROM EARA HEARING, INCLUDING WITHOUT LIMITATION ANY FAILURE OF, OR ERROR IN, PERFORMANCE OF THE WEBSITE OR ANY SUCH PRODUCTS OR SERVICES. BECAUSE SOME STATES AND COUNTRIES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE LIABILITY IN SUCH JURISDICTIONS SHALL BE LIMITED TO THE FULL EXTENT PERMITTED BY THE RELEVANT LAW. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EARA HEARING'S TOTAL CUMULATIVE LIABILITY FOR ANY DIRECT DAMAGES, PROPERTY DAMAGE, PERSONAL INJURY, LOSS OF LIFE, OR ANY OTHER DAMAGES NOT EXCLUDED OR PRECLUDED PURSUANT TO THE PROVISIONS ABOVE, ARISING FROM OR RELATED TO THE WEBSITE, THESE TERMS OR CONDITIONS, OR ANY PRODUCTS OR SERVICES OF EARA HEARING, WHETHER IN CONTRACT OR TORT OR OTHERWISE, SHALL BE LIMITED TO AN AMOUNT NEVER TO EXCEED THE GREATER OF (i) FIVE HUNDRED DOLLARS ($500); OR (ii) THE AMOUNTS ACTUALLY PAID BY YOU TO EARA HEARING THROUGH THE WEBSITE OR FOR ANY SUCH PRODUCTS OR SERVICES.</p>
                    </div>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>WARRANTY PROGRAM, LOSS & DAMAGE COVERAGE, AND RETURN POLICY</h2>
                    <p className='mrg-t'>All product warranties and coverage included with purchase are effective from the date of delivery. Extended warranty and/or loss and damage coverage purchased from Eara Hearing will apply for the additional period specified in such purchase, starting after your previous period of coverage. Coverage periods for Eara Hearing-supported devices sold by third parties may vary; check the terms of your purchase.</p>
                    <p className='mrg-t'>Warranty Service. Should repair or replacement of a product purchased from or supported by Eara Hearing under warranty be necessary, we will make every effort to provide this service in a timely and efficient manner. To facilitate this service, please contact Eara Hearing support at support@earahearing.com or (800) 933-0885 prior to returning the product with a completed Repair/Remake Service form (if required) to Eara Hearing in appropriate packaging. A product repaired or replaced under warranty maintains the original purchase warranty and coverage effective date. Replacements shall be made with the same model if available, or else a substantially similar model, and may be rebuilt with or otherwise include refurbished internal components that have been thoroughly tested to ensure full functionality and meet original manufacturer specifications in line with industry standard practice. Any attempt to open, service, or repair the device other than by Eara Hearing or (an) Eara Hearing-qualified facility will void the warranty. </p>
                    <p className='mrg-t'>Eara Hearing may require that you return the defective or damaged device before sending you a replacement. You must ensure that the correct device is returned to Eara Hearing. If Eara Hearing provides you with an advanced replacement (at its discretion) device before we receive your defective or damaged device, and you do not return the defective or damaged device within the time communicated to you in notification emails, you authorize Eara Hearing to charge you, including via your original form of payment, for, and agree to pay, the full value of the replacement device.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Loss & Damage Coverage</h2>
                    <p className='mrg-t'>Under Eara Hearing's loss and damage policy, any covered hearing aids or accessories that are stolen, lost, or catastrophically damaged can be replaced while the product is under the loss and damage policy. Note that for hearing aids, the replacement must be for the same customer and of both units (if a pair), and it must include the same options package as the original hearing aids. The following fees apply:</p>
                    <ul>
                        <li className='mrg-t'>Hearing aids deductible: $250</li>
                        <li className='mrg-t'>Charger deductible: $50</li>
                    </ul>
                    <p className='mrg-t'>Covered devices may be replaced only once under this program during each coverage period (i.e., once during the initial coverage period, and once during a purchased extension period, if any), and may not be returned for credit. The effective date of the product warranty on the replacement unit is the same as that of the original unit. Replacements shall be made with the same model if available, or else a substantially similar model, and may use refurbished internal components that have been thoroughly tested to ensure full functionality and meet original manufacturer specifications in line with industry standard practice. Any attempt to open, service, or repair the device other than by Eara Hearing or a Eara Hearing-qualified facility will void the loss and damage coverage. Ownership of the stolen, lost, or damaged devices reverts to Eara Hearing. Should a claim need to be filed, contact Eara Hearing support.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark headline text-bold underline'>Standard Return Policy</h2>
                    <p className='mrg-t'>If hearing aids or accessories purchased from Eara Hearing are returned for credit within 45 days from the date the item was delivered to the customer's specified address, along with all included batteries, cords, accessories, and other items (other than any disposable items which were used with the hearing aids/accessory), you will receive a full refund of the purchase price. Eara Hearing will pay for return shipment. To be eligible for return, the returned items must be in the same condition as when received, ordinary wear and tear excluded, the return must be initiated with Eara Hearing support no later than midnight Eastern time on the last day of the return period, and all items must be received by Eara Hearing within 14 days after the end of the return period. Refund will be made to the original form of payment when possible, otherwise refund will be made by another means in Eara Hearing's discretion and subject to the customer providing or verifying any information required by Eara Hearing. Purchases or upgrades of Care & Protection Packages, or warranty, loss & damage, and/or Audiology Team support coverage extensions, are not returnable except as part of return of the underlying hearing aids within the standard return policy window. This return policy does not apply to Eara Hearing devices sold by third parties; please consult the vendor to determine the specifics of your return period and procedures for return.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='text text-dark text-bold headline underline'>Support</h2>
                    <p className='mrg-t'>Customer Support. If you have any questions or concerns regarding the Sites or Eara Hearing's products or services, please contact Eara Hearing support at support@earahearing.com or (800) 933-0885 or visit the Sites. Customer support will be provided on all devices purchased from or distributed by Eara Hearing subject to availability of applicable Eara Hearing personnel and to Eara Hearing's standard support practices and procedures and is limited to responding to inquiries sent through Eara Hearing's standard support communication channels. Eara Hearing does not provide any commitments or guarantees as to response times or as to when or whether problems or concerns can be resolved or addressed.</p>
                    <p className='mrg-t'>Audiology Team Support. Eara Hearing provides unlimited consultations of Audiology Team (licensed hearing care professional) support included with all hearing aids purchased from Eara Hearing. Inclusion of and term of Eara Hearing Audiology Team support for hearing aids purchased through third parties will be determined by the terms of your purchase from the vendor. Support provided by Eara Hearing's licensed professionals is only available to customers located within Eara Hearing's covered service area.</p>
                    <p className='mrg-t'>Support Limitations. Customer and Audiology Team support will not be provided to customers or others who are abusive, as determined in Eara Hearing's discretion. Calls with Eara Hearing personnel cannot be recorded without prior notification, and calls with the Audiology Team cannot be recorded without prior express consent of all parties. You understand and agree that any customer service and support offered and provided by Eara Hearing is not for urgent medical or health matters or emergencies.</p>
                    <p className='mrg-t'>Please do not contact customer service or support offered by Eara Hearing with any life, health, or medical emergency, or any other emergency. If you have any such emergency, you should immediately contact the police, fire department, 911, or appropriate emergency response service.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='headline text text-dark text-bold underline'>Permission To Treat</h2>
                    <p className='mrg-t'>As part of its hearing care services, Eara Hearing may offer certain Telehealth services to you. You consent to receive emails or other electronic communications from Eara Hearing regarding your hearing care and health, which may contain health information. You understand that virtual encounters via phone, email, video, or other means may involve, and you hereby consent to the use of, automated tools for diagnosis, care, treatment, or communication related to hearing matters. Additionally, you acknowledge that such virtual encounters may involve care provided by various hearing care professionals, including audiologists, hearing aid dispensers, and support personnel.</p>
                    <p className='mrg-t'>You grant permission to Eara Hearing and the hearing care professionals to record and process your personal details and health data. You may withdraw these permissions at any time by submitting written notification to https://earahearing.com/contact-us/ after which you will no longer be eligible to receive Telehealth services from Eara Hearing.</p>
                    <p className='mrg-t'>"Telehealth" refers to the provision of healthcare services using technology when the healthcare provider and patient are not physically present in the same location, and/or the virtual delivery of healthcare services, including by a medical provider or via digital or automated tools for medical or health-related diagnosis and treatment. Telehealth services may be utilized for diagnosis, treatment, care, follow-up, and/or patient education, and may include electronic transmission of patient medical records, medical images, and other patient data or information, as well as synchronous and asynchronous interactions via audio, video, text, and/or other electronic communications. Furthermore, you understand that your condition may not be treatable via Telehealth services, or that transmitted information may be insufficient for appropriate medical decision-making. In such cases, you may be advised to seek additional in-person medical care or emergency services.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='headline text text-dark text-bold underline'>Copyrights and Other Intellectual Property</h2>
                    <p className='mrg-t'>Eara Hearing retains all ownership and other rights to any copyrightable material on the Sites or in its products, including software and user interfaces, as well as any other intellectual property and technology. No rights or licenses are granted except as expressly stated herein. You may not copy, publicly display, sell, post, or transmit the Sites, our products, or any portion thereof, nor interfere with or attempt to gain unauthorized access to the Sites. However, you may make one copy of material for personal and noncommercial use only, with written permission from Eara Hearing. Any violation of these restrictions should be promptly reported to us.</p>
                    <p className='mrg-t'>Trademark "Eara" the Eara Hearing logo, are owned by Eara Hearing LLC. You may not use or display any of these trademarks without prior written consent, as unauthorized use may violate applicable trademark laws.</p>
                    <p className='mrg-t'>Information Collected on the Sites Subject to the provisions of our Privacy Policy, information collected on or through the Sites is owned by Eara Hearing. Therefore, we may disclose or sell such information, for instance, in connection with the sale of our company or a portion of our assets.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='headline text text-dark text-bold underline'>Opt-out Procedures</h2>
                    <p className='mrg-t'>To choose not to receive future email marketing communications from Eara Hearing, please send an email to support@earahearing.com. You will also have the opportunity to opt-out of marketing communications at the end of marketing emails, and you can opt-out of SMS text messaging by replying "STOP". Please note that Eara Hearing will continue to send you emails regarding your orders, recalls, and other commercial matters deemed necessary, even if you have opted out of marketing communications.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='headline text text-dark text-bold underline'>General Provisions</h2>
                    <p className='mrg-t'>You agree that any dispute with Eara Hearing or relating to the use of the Sites shall be brought solely in the courts of competent jurisdiction in Tampa, Florida without regard to conflicts of law principles. These Terms and Conditions, along with the Privacy Policy and any Bill of Sale from Eara Hearing, constitute the entire agreement between you and Eara Hearing regarding the subject matter herein, superseding any prior agreements, understandings, or arrangements between you and Eara Hearing regarding such subject matter. If any provision of these Terms and Conditions is deemed invalid or unenforceable, the invalidity or unenforceability of such provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect. You may not assign these Terms and Conditions or assign any rights or delegate any obligations hereunder, in whole or in part, without the prior written consent of Eara Hearing. Any purported assignment or delegation by you without the appropriate prior written consent of Eara Hearing will be null and void. </p>
                    <p className='mrg-t'>Eara Hearing may freely assign these Terms and Conditions or any rights hereunder without your consent. You and Eara Hearing are independent contractors, and no agency, partnership, joint venture, employee-employer, or franchiser-franchisee relationship is intended or created by these Terms and Conditions. No failure or delay in exercising any right, provision, or remedy under these Terms and Conditions shall constitute a waiver thereof, and all waivers must be in writing, signed by the waiving party, to be effective. No waiver of any of these Terms and Conditions shall be deemed a waiver of other Terms and Conditions herein. Any claim or dispute brought by or for you against Eara Hearing must be commenced within one year after the cause of action arises, or else such claim or cause of action is barred.</p>
                </div>
                <div className='mrg-t'>
                    <h2 className='headline text text-dark text-bold underline'>NOTICE REGARDING MEDICAL OPINION</h2>
                    <p className='mrg-t'>If you are a resident of Alabama, Colorado, District of Columbia, Florida, Hawaii, Iowa, Kentucky, Massachusetts, Nebraska, New Hampshire, New Mexico, New York, New Jersey, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, Texas or Wyoming, by completing a purchase you confirm that you have read and acknowledge the text from your state below regarding medical opinions. (Does not apply to purchasers of Eara Hearing Plus)</p>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Alabama</h3>
                        <p className="mrg-t">The purchaser has been advised at the outset of his or her relationship with the hearing instrument apprentice, fitter, or dispenser that any examination(s) or representation(s) made by a licensed hearing instrument apprentice, fitter, or dispenser in connection with the fitting and selling of this hearing instrument(s) is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and, therefore, must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Colorado</h3>
                        <p className="mrg-t">The buyer has been advised at the outset of the buyer's relationship with the dispenser that any examination or representation made by a dispenser in connection with the practice of dispensing, fitting, or dealing in hearing aids is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and, therefore, must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">District of Columbia</h3>
                        <p className="mrg-t">This hearing aid will not restore normal hearing nor will it prevent further hearing loss.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Florida</h3>
                        <p className="mrg-t">A hearing aid will not restore normal hearing, nor will it prevent further hearing loss.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Hawaii</h3>
                        <p className="mrg-t">The purchaser has been advised at the outset of the purchaser's relationship with the hearing aid dealer and fitter that any examination or representation made by a hearing aid dealer and fitter in connection with the fitting and selling of this hearing aid is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this State and shall not be considered as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Iowa</h3>
                        <p className="mrg-t">The purchaser has been advised that any examination or representation made by a licensed hearing aid specialist in connection with the fitting or selection and selling of this hearing aid is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and therefore, must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Kentucky</h3>
                        <p className="mrg-t">The purchaser has been advised at the outset of his or her relationship with the audiologist licensed under KRS Chapter 334A or specialist in hearing instruments that any examination or representation is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and therefore shall not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Massachusetts</h3>
                        <p className="mrg-t">This hearing aid will not restore normal hearing nor will it prevent further hearing loss.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Nebraska</h3>
                        <p className="mrg-t">The purchaser has been advised at the outset of his or her relationship with the hearing instrument specialist that any examination or representation made by a licensed hearing instrument specialist in connection with the fitting and selling of this hearing instrument is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and therefore must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Hampshire</h3>
                        <p className="mrg-t">This hearing aid will not restore normal hearing nor will it prevent further hearing loss.</p>

                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Jersey</h3>
                        <p className="mrg-t">The purchaser has been advised at the outset of his or her relationship with the hearing aid dispenser that any examination or representation made by a licensed hearing aid dispenser in connection with the practice of fitting and selling of this hearing aid, or hearing aids, is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this State, or by certified audiologists and therefore must not be regarded as medical opinion.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Mexico</h3>
                        <p className="mrg-t">Buyer has been advised that licensee is not a licensed physician and that the examination and recommendation is made as a hearing aid dispenser or audiologist and not as a medical diagnosis or prescription.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New York</h3>
                        <p className="mrg-t">The buyer has been advised at the outset of his or her relationship with a Eara Hearing audiologist or hearing aid dispenser that any examination or representation made by a hearing aid dispenser in connection with the business of dispensing this hearing aid, or hearing aids, is not an examination, diagnosis, or prescription by a person licensed to practice medicine in New York, and therefore, must not be regarded as medical opinion.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">North Dakota</h3>
                        <p className="mrg-t">Any examination or representation made by a licensed hearing aid specialist in connection with the fitting and selling of this hearing instrument is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and therefore, must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Ohio</h3>
                        <p className="mrg-t">The purchaser is advised that any examination, fitting, recommendation, or representation made by a licensed hearing aid dealer or fitter in connection with the sale of this hearing aid is not an examination, diagnosis, or prescription made by a person licensed to practice medicine in this state and therefore must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Olkahoma</h3>
                        <p className="mrg-t">Any examination or representation made by a licensed hearing aid dealer and fitter in connection with the fitting and selling of this hearing aid is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and therefore must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Pennsylvania</h3>
                        <p className="mrg-t">You have been informed at the outset of your relationship with the hearing aid dealer that any examination or representation made by a registered hearing aid dealer and fitter in connection with the practice of fitting and selling this hearing aid is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this Commonwealth. Therefore, it must not be regarded as medical opinion.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Rhode Island</h3>
                        <p className="mrg-t">You have been advised at the outset of your relationship with the hearing aid dealer that any examination(s) or representation(s) made by a licensed hearing aid dealer and fitter in connection with the fitting and selling of this hearing aid(s) is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state. Therefore, it must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Texas</h3>
                        <p className="mrg-t">You have been advised that any examination or representation made by a licensed hearing instrument dispenser or apprentice permit holder or temporary training permit holder in connection with the fitting and selling of the hearing instrument(s) is not an examination, diagnosis, or prescription by a person duly licensed and qualified as a physician or surgeon authorized to practice medicine in the State of Texas. Therefore, it must not be regarded as medical opinion or advice.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Wyoming</h3>
                        <p className="mrg-t">You have been advised that any examination or representations made by a licensed hearing aid specialist in connection with either the fitting or selling of this hearing aid is not an examination, diagnosis, or prescription by a person licensed to practice medicine in this state and shall not be regarded as medical opinion.</p>
                    </div>
                </div>
                <div className="mrg-t">
                    <h1>NOTICE REGARDING RETURNS AND ADJUSTMENTS</h1>
                    <p className="mrg-t">If you are a resident of Alaska, California, Colorado, Connecticut, Georgia, Idaho, Kentucky, Maine, Maryland, Minnesota, Nevada, New Hampshire, New York, Ohio, Oklahoma, Pennsylvania, Rhode Island, Texas, Vermont, Virginia, or West Virginia, BY COMPLETING A PURCHASE YOU CONFIRM THAT YOU HAVE READ AND ACKNOWLEDGE THE TEXT FROM YOUR STATE BELOW REGARDING RETURNS AND ADJUSTMENTS.</p>
                    <p>PLEASE NOTE OUR STANDARD RETURN PERIOD IS LONGER THAN WHAT MOST STATES REQUIRE. (Provisions relating to appointments, fitting and adjustments do not apply to Eara Hearing Plus or hearing aids purchased with our Basic Care & Protection Package.)</p>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Alaska</h3>
                        <p className="mrg-t">You may cancel this transaction within 30 days from the date you receive the hearing aid or this notice, whichever is later. You may also cancel this transaction within 60 days from the date you receive the hearing aid or this notice, whichever is later, if the hearing aid dealer is not a licensed physician or a licensed audiologist and if a licensed physician or a licensed audiologist advises you in writing to cancel this transaction.</p>
                        <p className="mrg-t">If you cancel this transaction, the property you traded in, the payments you made under the sale or lease (less certain costs allowed by state law) and any negotiable instrument executed by you will be returned within 20 days following receipt by the hearing aid dealer of your cancellation notice, and the hearing aid dealer will cancel any security interest arising out of the sale or lease.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">California</h3>
                        <p className="mrg-t">Purchaser may contact Eara Hearing at (800) 854-2772 for the address and the office hours available for Eara Hearing audiologists and hearing aid dispensers for fitting or post-fitting adjustments and servicing of the hearing aids.</p>
                        <p className="mrg-t">This hearing aid is warranted to be specifically fit for the particular needs of you, the buyer. If the hearing aid is not initially fit for your particular needs, it may be returned to the seller within 45 days of the initial date of delivery to you. If you return the hearing aid, the seller will either adjust or replace the hearing aid or promptly refund the total amount paid. This warranty does not affect the protections and remedies you have under other laws.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Colorado</h3>
                        <p className="mrg-t">The buyer has the right to cancel this purchase for any reason at any time prior to 12 midnight on the 30th calendar day after receipt of the hearing aid by giving or mailing the dispenser written notice of cancellation and by returning the hearing aid, unless the hearing aid has been significantly damaged beyond repair while the hearing aid was in the buyer's control.</p>
                        <p className="mrg-t">The dispenser will promptly refund all moneys paid for the purchase of a hearing aid if it is not delivered to the consumer within the 30-day period. The sale is void and unenforceable if the hearing aid being purchased is not delivered to the consumer within 30 days after the date the written contract is signed or the receipt is issued, whichever occurs later.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Conneticut</h3>
                        <p className="mrg-t">The buyer has the right to cancel this purchase or rental for any reason at any time prior to midnight of the thirtieth calendar day after receipt of the hearing aid. A cancellation fee of twelve per cent of the purchase price may be imposed.</p>
                        <p className="mrg-t">Any buyer who orders a hearing aid and leaves a deposit of one hundred dollars or more with the seller shall be entitled to cancel such order and demand a full refund of such deposit, less any examination costs, if the buyer is unable to inspect the hearing aid at the seller's place of business within forty-five days after the date the seller receives the deposit.</p>
                        <p className="mrg-t">If buyer returns the hearing aid in the same condition as when purchased, ordinary wear and tear excepted, within thirty days of the date of receipt of such hearing aid by such purchaser, such buyer shall be entitled to free adjustment of such hearing aid or the return of the full purchase price of the hearing aid and accessories as itemized on the bill of sale.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Georgia</h3>
                        <p className="mrg-t">I have read, understand, and have signed or initialed a copy of the refund and return policy. The policy states if, and up until what date, I can return the hearing aid for a full refund, a partial refund of what percentage, or a full or partial credit. The policy also identifies what fees, if any, for services will be refunded or credited when the hearing aid is returned for refund or credit.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Idaho</h3>
                        <p className="mrg-t">This bill of sale becomes null and void and unenforceable if the hearing aid being purchased is not delivered to the buyer within thirty (30) days of the date the written contract is signed. Should the hearing aid not be delivered within the stipulated timeframe, the licensee must promptly refund any and all moneys paid for the purchase of the hearing aid.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Kentucky</h3>
                        <p className="mrg-t">CLIENT'S RIGHT TO CANCEL WITHIN 30 DAYS</p>
                        <p className="mrg-t">The client has the right to cancel this purchase for any reason at any time prior to midnight of the 30th calendar day after actual receipt of the hearing instrument(s). You may cancel the purchase by notifying the seller that you do not want the hearing instrument(s) by mailing a notice before such date titled "NOTICE OF RETURN" to the seller at: 8001 E. Bloomington Freeway, Bloomington, MN 10010. Upon cancellation, the seller may keep up to 10% of the selling price.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Maine</h3>
                        <p className="mrg-t">A 30-day trial period begins on the delivery date. Within the 30-day trial period, the dealer licensee shall contact the purchaser and provide any service, fitting, or repair that may be necessary for the beneficial and comfortable use of the hearing aid(s).</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Maryland</h3>
                        <p className="mrg-t">You may cancel this purchase for any reason, at any time within 30 days after the date of delivery of the hearing aid. To cover the costs of dispensing the hearing aid, the seller may withhold from the refund 10 percent of the purchase price or the seller's actual costs up to 20 percent of the purchase price. If you decide to cancel this contract:</p>
                        <p className="mrg-t">You must provide notice of the cancellation in writing, within 30 days of the date of delivery of the hearing aid, to (the seller) at the address of the seller; and You must make the hearing aid available to the seller, in substantially as good condition as when you received it.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Minnesota</h3>
                        <p className="mrg-t">Minnesota state law gives the buyer the right to cancel this purchase for any reason at any time prior to midnight of the 45th calendar day after receipt of the hearing aid(s). This cancellation must be in writing and must be given or mailed to the audiologist or certified dispenser. If the buyer decides to return the hearing aid(s) within this 45-calendar-day period, the buyer will receive a refund of the total purchase price of the aid(s) from which the audiologist or certified dispenser may retain as a cancellation fee no more than $250.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Nevada</h3>
                        <p className="mrg-t">Buyers may contact Jabra Enhance for a follow-up appointment to take place no later than 21 days after the hearing aid is delivered. Call (800) 854-2772.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Hampshire</h3>
                        <p className="mrg-t">You have the right to cancel this purchase or rental for any reason within 30 days after receiving the hearing aid.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New York</h3>
                        <p className="mrg-t">In addition to other rights, the buyer has the right to cancel this purchase for any reason at any time prior to twelve midnight of the 45th calendar day after receipt of the hearing aid and return the hearing aid in the same condition, ordinary wear and tear excluded. Jabra Enhance will pay for return shipment. By law, the seller is allowed to retain an amount up to ten percent of the total purchase price of the canceled hearing aid, including batteries and cords or accessories thereto, inclusive of all fees related to the hearing aid.</p>
                        <p className="mrg-t">Purchasers may contact Eara Hearing at (800)-933-0885 for the address and the office hours available for Eara Hearing audiologists and hearing aid dispensers for fitting or post-fitting adjustments and servicing of the hearing aids.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Ohio</h3>
                        <p className="mrg-t">Right To Return The Hearing Aid Within Thirty Days And Receive A Refund Under Ohio law (section 1345.30 of the Revised Code): A consumer has the right to return a hearing aid for any reason within thirty days after it is originally delivered to the consumer or a person acting on the consumer's behalf and receive a refund of the consideration paid for the hearing aid less an amount specified by the hearing aid dealer or fitter, physician, or audiologist to cover expenses incurred in connection with the hearing aid not later than fifteen days after presenting proof of payment for the hearing aid and returning it in the condition in which it was received, except for normal wear and tear. In this case, the amount deducted from the refund will be $0.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Oklahoma</h3>
                        <p className="mrg-t">Oklahoma state law gives the purchaser the right to cancel this purchase for any reason by returning the hearing aid to the hearing aid provider at any time prior to midnight of the thirtieth calendar day after receipt of the hearing aid. By law, the hearing aid provider may be entitled to a cancellation fee not to exceed ten percent (10%) of the total purchase price for the hearing aid or one hundred fifty dollars ($150.00) per hearing aid, whichever is less, to cover the costs incurred by the hearing aid provider. If the purchaser returns the hearing aid within the thirty-day period, the purchaser will receive a refund of the full purchase price.</p>
                        <p className="mrg-t">If the hearing aid provider fails to comply with this provision, complaints should be forwarded to:</p>
                        <p className="mrg-t">Oklahoma State Department of Health Occupational Licensing Division 1000 N.E. 10th Street Oklahoma City, Oklahoma 73117</p>
                        <p className="mrg-t">During the thirty-day period, if the hearing aid is returned for repairs or adjustments, the thirty-day period shall be tolled until the return of the aid(s) to the purchaser.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Pennsylvania</h3>
                        <p className="mrg-t">If a hearing aid is returned within 30 days of the date of delivery in the same condition, ordinary wear and tear excluded, you are entitled to a refund of the portion of the purchase price of the hearing aid and accessories as itemized on the receipt and above, less the cancellation fee stated above. If a cancellation fee is imposed, the nonrefundable amount for each aid and accessories cannot exceed 10% of the purchase price of the hearing aid and accessories or $150.00 per aid and accessories, whichever is less. If you cancel your order prior to delivery, you are entitled to a full refund of the purchase price of the aid and accessories, and a full refund for services not yet rendered.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Rhode Island</h3>
                        <p className="mrg-t">During a thirty (30) day trial period, the purchaser may return the instrument in its original condition, less normal wear, with no further financial obligation. This product is protected by Chapter 45 of Title 6, titled "Enforcement of Assistive Technology Warranties," which shall be made available by the dispenser upon request.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Texas</h3>
                        <p className="mrg-t">Eara Hearing recommends a follow-up appointment within thirty (30) days after the hearing instrument fitting. For assistance, please call (800)-933-0885.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Vermont</h3>
                        <p className="mrg-t">Notice of a 45-day trial period: You have 45 days from the day you receive your hearing aid to try it out and decide whether you wish to keep it. The 45-day period does not include any days that the hearing aid is in the possession of the dispenser, manufacturer, repairer, or their agents. If, during the 45-day trial period, you feel that the hearing aid is not satisfactory for you, you have the right to return the hearing aid and receive a refund of the full product price. However, if you have damaged the hearing aid, your refund will be reduced by the reasonable cost of damage. To return the hearing aid and receive a refund, please contact Eara Hearing at (800)-933-0885, no later than 45 days after delivery of the hearing aid.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Virginia</h3>
                        <p className="mrg-t">Within 30 days of the date of delivery, any buyer of a hearing aid shall be entitled to return the hearing aid for any reason, provided such aid is returned in satisfactory condition. The purchaser shall be entitled to a replacement or a refund of all charges paid, less a reasonable charge for medical, audiological, and hearing aid evaluation services provided by the hearing aid specialist.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">West Virginia</h3>
                        <p className="mrg-t">You have the right to return the hearing aid to the dealer from whom it was purchased at any time within thirty (30) days after receipt of the aid and rescind the purchase agreement, except for reasonable fitting and examination charges (maximum fitting charge of $125.00), if the aid does not function properly or cannot be adjusted to correct the deficiency in your hearing, or is otherwise unsatisfactory. The aid returned must be without damage.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Alaska</h3>
                        <p className="mrg-t">Buyers may file a written complaint about a hearing aid or a hearing aid dealer with the Alaska Department of Commerce, Community, and Economic Development at:</p>
                        <p className="mrg-t">P.O. Box 110800 Juneau, AK 99811-0800</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">California</h3>
                        <p className="mrg-t">NOTICE CONSUMERS</p>
                        <p className="mrg-t">Hearing Aid Dispensers, Hearing Aid Temporary Licensees, Hearing Aid Trainees, and Dispensing Audiologists are licensed and regulated by the Speech-Language Pathology & Audiology & Hearing Aid Dispensers Board</p>
                        <p className="mrg-t">(916)-287-7915</p>
                        <a href="www.speechandhearing.ca.gov">www.speechandhearing.ca.gov</a>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Colorado</h3>
                        <p className="mrg-t">Dispensers who are licensed, certified, or registered by the Department of Regulatory Agencies are regulated by the Division of Professions and Occupations in the Department of Regulatory Agencies. Any complaints can be filed against the licensee by contacting the Office of Hearing Aid Provider Licensure at:</p>
                        <p className="mrg-t">Colorado Office of Audiology and Hearing Aid Provider Licensure within the Division of Professions and Occupations 1560 Broadway, Suite 1350 Denver, CO 80202 (303) 894-7800 <a href="https://www.colorado.gov/pacific/dora/Hearing_Aid_Provider">https://www.colorado.gov/pacific/dora/Hearing_Aid_Provider</a></p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">District of Columbia</h3>
                        <p className="mrg-t">Complaints with respect to this purchase may be submitted to the Office of Consumer Protection of the District of Columbia at:</p>
                        <p className="mrg-t">Office of the Attorney General Office of Consumer Protection 441 4th Street, NW Washington, DC 20001</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Florida</h3>
                        <p className="mrg-t">Any complaint concerning the hearing aid and guarantee therefor, if not reconciled with the licensee from whom the hearing aid was purchased, should be directed by the purchaser to the:</p>
                        <p className="mrg-t">Florida Department of Health Department of Health Consumer Services Unit Bald Cypress Way Bin C-75 Tallahassee, FL 32399-3260 (850) 488-0796.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Idaho</h3>
                        <p className="mrg-t">For general questions or questions regarding procedures for filing complaints against anyone licensed to dispense hearing aids, you may contact:</p>
                        <p className="mrg-t">Idaho Bureau of Occupational Licenses PO Box 83720 Boise, Idaho 83720-0063 Phone: (208) 334-3233 https://dopl.idaho.gov/</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Kentucky</h3>
                        <p className="mrg-t">ANY COMPLAINTS CONCERNING THE SALE OR SERVICE OF THIS HEARING INSTRUMENT WHICH ARE NOT CORRECTED BY A LICENSED AUDIOLOGIST OR SPECIALIST IN HEARING INSTRUMENTS SHOULD BE DIRECTED TO:</p>
                        <p className="mrg-t">KENTUCKY BOARD OF SPEECH-LANGUAGE PATHOLOGY AND AUDIOLOGY COMMONWEALTH OF KENTUCKY FRANKFORT, KENTUCKY 40601</p>
                        <p className="mrg-t">or</p>
                        <p className="mrg-t">KENTUCKY LICENSING BOARD FOR SPECIALISTS IN HEARING INSTRUMENTS AT ITS CURRENT MAILING ADDRESS FOUND ON THE BOARD WEB SITE.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Louisiana</h3>
                        <p className="mrg-t">Louisiana State Board of Hearing Aid Dealers 308 Gregory Dr. Luling, LA 70070 (504) 655-0383</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Maine</h3>
                        <p className="mrg-t">If you wish to file a complaint regarding this purchase, contact: Complaint Coordinator, Office of Professional and Occupational Regulation 35 State House Station Augusta, ME 04333 Telephone: (207) 624-8660 Website: www.maine.gov/professionallicensing</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Montana</h3>
                        <p className="mrg-t">If you have any questions regarding your consumer rights with respect to hearing aids and related devices, contact the state Board of Hearing Aid Dispensers at:</p>
                        <p className="mrg-t">301 South Park, 4th Floor PO BOX 200513 Helena, Montana 59620-0513 (406) 841-2202</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Hampshire</h3>
                        <p className="mrg-t">Complaints that arise with respect to this transaction may be submitted in writing to the following:</p>
                        <p className="mrg-t">New Hampshire Consumer Protection and Antitrust Bureau, Division of Public Protection, New Hampshire Department of Justice 33 Capitol Street Concord, NH, 03301 (603) 271-3658</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">New Mexico</h3>
                        <p className="mrg-t">Speech-Language Pathology, Audiology and Hearing Aid Dispensing Practices Board PO BOX 25101 Santa Fe, NM 87504 Telephone: (505) 476-4622</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Oklahoma</h3>
                        <p className="mrg-t">If the hearing aid provider fails to comply with state requirements for returns, complaints should be forwarded to:</p>
                        <p className="mrg-t">Oklahoma State Department Of Health Occupational Licensing Division 1000 N.E. 10TH Street Oklahoma City, Oklahoma 73117</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Oregon</h3>
                        <p className="mrg-t">Complaints regarding the purchase of hearing aids may be made to:</p>
                        <p className="mrg-t">Oregon Health Licensing Agency 1430 Tandem Avenue NE Suite 180 Salem, OR 97301 (503) 373-2024 https://www.oregon.gov/OHA/PH/HLO/Pages/Contact-Us.aspx</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Pennsylvania</h3>
                        <p className="mrg-t">If your rights are violated, you may contact the State Bureau of Consumer Protection, the Pennsylvania Department of Health in Harrisburg, or your local district attorney.</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Tennesse</h3>
                        <p className="mrg-t">A buyer may contact the below Council regarding complaints on any matter relating to the fitting and dispensing of hearing instruments:</p>
                        <p className="mrg-t">Tennessee Council for Hearing Instruments Specialists 665 Mainstream Drive, 2nd Floor Nashville, TN 37243 (615) 741-5735 local or 1-800-778-4123 nationwide</p>
                    </div>
                    <div className="mrg-t">
                        <h3 className="headline text text-dark text-bold">Texas</h3>
                        <p className="mrg-t">If you have a complaint against a licensed hearing instrument dispenser or apprentice permit holder or temporary training permit holder, you may contact:</p>
                        <p className="mrg-t">Texas Department of Licensing and Regulation P.O. Box 12157 Austin, Texas 78711 Telephone: (512) 463-6599, Toll-Free (in Texas): (800) 803-9202 www.tdlr.texas.gov</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TermsCondition