import closeBtn from "../../assets/close-btn.svg"
import './privacy-policy.css'

type policyProps = {
    clickHandler: () => void
}
const PrivacyPolicy = ({clickHandler}: policyProps) => {
    return (
        <div className="policy">
            <div className="policy-header">
                <div>
                    <h1 className="text text-dark text-bold">Eara Hearing privacy policy</h1>
                    <small className="text text-dark header-sm text-bold">Last updated: March 21st 2024</small>
                </div>
                <div className="close-policy-btn-wrapper" onClick={clickHandler}>
                    <img src={closeBtn} alt="" className="close-modal" />
                </div>
            </div>
            <div className="policy-wrapper">
                <div className="policy-intro">
                    <p>
                        Eara Hearing Corporation ("Eara Hearing") values the privacy rights of all users of Eara Hearing's online platforms, including the website <a href="https://earahearing.com/" className="underline">https://earahearing.com/</a>, associated pages, affiliated websites, and corresponding social media pages, collectively referred to as the "Sites." This Privacy Policy also covers Eara Hearing's mobile applications and the products and services associated with these platforms.
                    </p>
                    <p>Whether information is provided through the Sites, by telephone, email, or other communication channels, the principles outlined in this policy apply. References to the "Sites" encompass products, services, information, and communications associated with Eara Hearing. </p>
                    <p>Eara Hearing is committed to safeguarding any information shared with us. This policy delineates our online information practices.</p>
                    <p>By accessing the Site and/or App, you acknowledge your comprehension and acceptance of the terms outlined in this Policy. Additionally, you consent to the collection, usage, and disclosure of information as described herein. Should you disagree with these terms, please refrain from utilizing the Site or App.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text text-dark headline text-bold">Personal Information Collected</h2>
                    <div>
                        <p>Eara Hearing gathers information provided by users and from devices utilized to access the Eara Hearing platform. This collection begins from the initial visit or access to our platforms.</p>
                        <p>Users may provide Personal Information (as defined below), including health details, either directly in connection with the use of our platforms or automatically during interactions. Examples of collected personal information encompass, but are not limited to, name, address, telephone number, health insurance details, email address, birth date, gender, race, credit card information, health specifics, online hearing test results, survey responses, or other personally identifying information. This may also include photographs or video images submitted to Eara Hearing.</p>
                        <p>Additionally, Eara Hearing obtains information from third-party affiliates, such as audiologists, hearing aid dispensers, and hearing aid manufacturers. This may include referral details, hearing benefits, treatment information, and audiogram results.</p>
                        <p>Information gathered by Eara Hearing from platform users includes IP addresses, browser types, mobile device IDs like UDID, geo-location data, and operating system types.</p>
                        <div>
                            <p>The Personal Information collected enables Eara Hearing to:</p>
                            <ul className="policy-ul-list">
                                <li>Facilitate hearing aid purchases</li>
                                <li>Administer user accounts</li>
                                <li>Provide appointment reminders</li>
                                <li>Send communications</li>
                                <li>Offer hearing care services</li>
                                <li>Respond to inquiries</li>
                                <li>Gather feedback</li>
                                <li>Understand platform usage and performance</li>
                                <li>Analyze user behavior and activity</li>
                                <li>Personalize and enhance platform experiences</li>
                                <li>Conduct research activities</li>
                                <li>Manage platform security</li>
                                <li>Fulfill legal requirements imposed by applicable laws and regulations</li>
                            </ul>
                        </div>
                        <p>At times, Eara Hearing may enhance or use Personal Information in conjunction with data obtained from third parties, including public databases, social media platforms, and other external sources. For instance, third-party information may be employed to better comprehend user interests by associating demographic details with the provided information.</p>
                        <p>If users choose to submit Personal Information regarding another person, like a relative seeking hearing aids or hearing care, they affirm that they possess the necessary authority from that individual and permit Eara Hearing to use the information in accordance with this policy.</p>
                        <p><span className="txt-bold-underline">Combining Personal Information:</span> Eara Hearing may amalgamate the personal information provided by users with data from various sources, including:</p>
                        <p><span className="txt-bold-underline">Data Providers:</span> Information services and data licensors offering contact, profile, demographic, and other details. This encompasses information about households, interests, educational backgrounds, and purchasing histories. Some providers may merge data obtained from site visitors through technologies like cookies and pixel tags with accessible email or mailing addresses. This assists in delivering relevant marketing offers through email and direct mail.</p>
                        <p><span className="txt-bold-underline">Public Sources: </span>Platforms like Facebook, Twitter, Instagram, and other social media channels. Collected personal information may include photos, posts, likes, and engagement with content. For example, Eara Hearing may repost a user's Instagram post related to our products, always seeking permission before using posts and photos. Additionally, if users provide reviews about their Eara Hearing experiences, these may be shared with the public on an anonymous basis.</p>
                        <p><span className="txt-bold-underline">Automatic Collection:</span> Information about users is automatically collected during their use of the platform through technologies such as cookies, pixels, beacons, and others. This may include general location details, IP address, browser type, operating system, duration of site visits, referral sources, viewed pages, basket contents, device ID, and device type. This information is utilized to deliver tailored content, personalized ads, and targeted marketing communications.</p>
                    </div>
                </div>
                <div className="information-use mrg-t">
                    <div>
                        <h2 className="text headline text-bold">Use of Personal Information</h2>
                        <p className="mrg-t">Eara Hearing utilizes your Personal Information to provide and communicate about products and services, including those offered by audiologists or hearing aid dispensers. This information may be transferred to contracted hearing aid manufacturers for order processing, repairs, and returns, as well as to health care providers, insurance companies, or entities working on your behalf. Sharing may also occur with outside contractors, auditors, consultants, or other engaged parties assisting in financial or operational activities. Eara Hearing may combine or share information with affiliates, subsidiaries, and business partners to enhance user experiences.</p>
                    </div>
                    <div>
                        <h2 className="text headline text-bold mrg-t">Personal Information Disclosure</h2>
                        <p className="mrg-t">Eara Hearing does not sell, trade, or rent identifying information unless permission is granted or required by law. Personal Information, including health details, may be shared under specific circumstances, such as reporting adverse reactions, product recalls, disease prevention, and health research. Users are informed that information related to hearing loss may be stored in hearing instruments, and if sent for service, Eara Hearing is not liable for unauthorized access by third parties.</p>
                    </div>
                    <div>
                        <h2 className="text headline text-bold mrg-t">Disclosure to Others</h2>
                        <p className="mrg-t">If users grant personal access to their Eara Hearing account to caregivers or family members, they gain access to shared Personal Information. Users authorize Eara Hearing to disclose their utilization of audiological services, indicating meeting hearing loss criteria, to relevant parties. When users log into the Eara Hearing account on mobile apps or web portal pages, information about hearing health, symptoms, treatments, and feelings may be provided. Eara Hearing may seek consent to post reviews, testimonials, or information online, visible to visitors on the website, social media profiles, promotional materials, or email communications. Users are reminded to exercise discretion when sharing information on social media, as Eara Hearing disclaims responsibility for others' use of disclosed information.</p>
                    </div>
                    <div>
                        <h2 className="text headline text-bold mrg-t">Cookies</h2>
                        <p className="mrg-t">Eara Hearing utilizes "cookies," small data files stored on your computer's hard drive or smart device when accessing our Sites. These cookies ensure optimal presentation of site content. You can decline cookies through your browser settings or opt out of third-party cookies via our cookie preferences management tool. However, declining cookies may limit site functionality. "Do Not Track" signals are currently not recognized by the Sites.</p>
                    </div>
                    <div>
                        <h2 className="text headline text-bold mrg-t">Web Beacons</h2>
                        <p className="mrg-t">Web Beacons, also known as web bugs or pixel tags, are minute graphics with unique identifiers included in our Sites or emails. They communicate with cookies to track and measure email performance, monitor web traffic, navigate user behavior, and assess content relevance. Unlike cookies, Web Beacons are embedded invisibly on web pages.</p>
                    </div>
                    <div>
                        <h2 className="text headline text-bold mrg-t">Third-Party Tracking</h2>
                        <p className="mrg-t">Various methods and tracking technologies by third parties may store or collect device usage through our Sites. Eara Hearing does not control these third-party tracking technologies, and users consent to their potential encounter. This Privacy Policy specifically addresses Eara Hearing's use of cookies and tracking technologies, not those of advertisers or third parties.</p>
                    </div>
                    <div className="mrg-t">
                        <h2 className="text headline text-bold mrg-t">We prioritize safeguarding your Personal Information</h2>
                        <p><span className="underline">Third-Party Sharing:</span> With exceptions outlined here, we do not trade, rent, share, or sell your Personal Information. However, your data may be shared with our marketing partners for marketing purposes. If you prefer not to have your information shared with our marketing partners, upon request, we will refrain from doing so.</p>
                        <p><span className="underline">Limited Sharing:</span> Unless you request or provide consent, we do not share your Personal Information outside our organization, except with necessary service providers and subcontractors. They assist in troubleshooting site or app issues, communication assistance, data analysis, marketing support, payment processing, and customer service. Only authorized personnel have access to this information, and it's stored securely. </p>
                        <p><span className="underline">Legal Disclosures:</span> We may disclose Personal Information in good faith when required by law or to enforce our policies, ensuring safety and security, including that of our site, platform, employees, and equipment. Such disclosures may be made to law enforcement or relevant authorities.</p>
                        <p><span className="underline">Use of Non-Identifiable Data:</span> We may utilize anonymous data based on user activity to enhance our site and app. Additionally, de-identified health data and other anonymized information may be aggregated for analysis and improvement purposes.</p>
                        <p><span className="underline">Sharing Aggregate Data:</span> We may share anonymized and aggregate data with third-party collaborators, partners, or subsidiaries for research and analysis, provided they adhere to our Privacy Policy terms.</p>
                        <p><span className="underline">Third-Party Responsibilities:</span> We are not accountable for how third parties utilize or disclose Personal Information collected according to this Privacy Policy once shared with them. If you disagree with the identified uses or disclosures, you may choose not to use the Eara Hearing services or app.</p>
                        <p className="mrg-t">Eara Hearing does not assume responsibility for the manner in which third parties, including social networks, partners, and advertisers, utilize or further disclose Personal Information collected from you in accordance with the Eara Hearing Privacy Policies after we have provided such information to those third parties. If you do not wish for us to use or disclose Personal Information collected about you as outlined in the Eara Hearing Privacy Policies, you should refrain from using the Eara Hearing Service or Eara Hearing Platforms.</p>
                        <p className="mrg-t">Your information may be shared with our parent company, subsidiaries, joint ventures, or other entities under common control, all of which are obligated to adhere to the terms of our Eara Hearing Privacy Policies.</p>
                        <p className="mrg-t">We may disclose your Personal Information if we believe in good faith that such disclosure is necessary to (a) comply with applicable laws or respond to subpoenas or warrants served on us, or (b) protect and defend our rights, property, you, or third parties. By using the Eara Hearing Service, you consent to us sharing your Personal Information under the circumstances described herein.</p>

                    </div>
                    <div>
                        <h2 className="underline mrg-t">Security Measures</h2>
                        <p className="mrg-t">Eara Hearing employs commercially reasonable physical, technical, and administrative security measures to safeguard Personal Information. These include a secure firewall and SSL encryption during transmission, denoted by a lock or key on your browser. While we take precautions, the electronic transmission of data via email, SMS text, or other methods is not entirely secure, and users assume associated risks.</p>
                    </div>
                </div>
                <div className="mrg-t">
                    <h1 className="text headline text-bold underline">Personal Information in the United States</h1>
                    <p className="mrg-t">Eara Hearing operates exclusively in the United States, with products and services intended for U.S. users. Users outside the U.S. acknowledge that information may be transferred to and processed in the U.S. or other jurisdictions, subject to U.S. laws. Users agree not to transfer Personal Information from outside the U.S., recognizing potential differences in data protection laws.</p>
                    <p className="mrg-t">At Eara Hearing, we implement various measures to safeguard your Personal Information, aiming to prevent loss, misuse, and unauthorized access, disclosure, alteration, and destruction. We employ physical, electronic, and procedural safeguards to protect the Personal Information we handle and maintain.</p>
                    <p className="mrg-t">However, it's important to note that while we strive to uphold stringent security measures, no system is entirely foolproof, and no method of data transmission can be guaranteed against interception or misuse. If you become aware that the security of your interactions with us is compromised, or if you suspect unauthorized access to your Eara Hearing account, please reach out to us immediately using the contact information provided in the "Contact Us" section below. Your prompt action helps us take swift measures to address any potential security concerns.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">How We Utilize Your Information at Eara Hearing</h2>
                    <p className="mrg-t">We use your information to address your inquiries and concerns. Additionally:</p>
                    <p className="mrg-t"><span className="underline">Registration and Profile Creation:</span> When you sign up or complete our online hearing screener, we collect necessary information to facilitate your access to our Site and/or App. This data, your answers to your online questions and the results of your audiogram screener are stored on our secured database as an “attachment”, in order to provide the best hearing solutions. This data enables us to keep you informed about products/services you're interested in and allows easy account management.</p>
                    <p className="mrg-t"><span className="underline">Customer Service:</span> After purchasing a device or service, we may reach out via phone, email, text, or app notifications for service updates, policy changes, support, feedback requests, or future product/service offers.</p>
                    <p className="mrg-t"><span className="underline">Sales and Marketing:</span> If you leave an inquiry, use our Chat option, or engage with us on social media, we may contact you through various channels for sales and marketing purposes. By providing consent, you may receive newsletters.</p>
                    <p className="mrg-t ">Eara Hearing's Site or Platform may feature links to other websites. Any Personal Information you provide on these linked pages or sites is directly transmitted to the respective third party and is subject to their privacy policy. Our Policy does not govern such linked sites, and we do not bear responsibility for their content or their privacy and security practices. We encourage you to familiarize yourself with the privacy and security practices of these websites before divulging any Personal Information to them.</p>
                </div>
                <div className="mrg-t">
                    <h2  className="text headline text-bold underline">Do We Gather Inforamtion from Individuals Under 18?</h2>
                    <p className="mrg-t">The Eara Hearing Site and App are not intended for use by individuals under the age of 18, and we do not knowingly collect or utilize any Personal Information from such individuals. Should we become aware of unintentionally collected Personal Information from someone under 18, we will undertake commercially reasonable efforts to promptly remove such data from our database.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">What If I Reside in California?</h2>
                    <p className="mrg-t">California law mandates that operators of websites or similar services provide specific disclosures to users residing in California regarding their rights.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">Transparency Regarding Personal Information</h2>
                    <p className="mrg-t">At Eara Hearing, we prioritize the protection of your Personal Information. We do not engage in trading, renting, sharing, or selling your Personal Information to third parties, unless expressly authorized by you. However, if we disclose Personal Information primarily used for personal, family, or household purposes of a California user to a third party for their direct marketing endeavors, we will disclose the identity of such third party along with the type of personal data shared, upon your request.</p>
                    <p className="mrg-t">For additional clarification on this matter, please refer to the “Contact Us” section below. Kindly note, in accordance with California law, businesses are mandated to respond to a user’s request only once during any calendar year.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">Handling Do-Not-Track Requests</h2>
                    <p className="mrg-t">Certain web browsers offer users the option to indicate their preference not to be tracked while browsing the Internet. California law necessitates that we inform users about our treatment of do-not-track requests. However, the internet industry has yet to establish a consensus on the definition of "Do Not Track," how compliance with such requests would be assessed, or a standardized approach to addressing such signals.</p>
                    <p className="mrg-t">Presently, we have not implemented features to recognize or respond to browser-initiated "Do-Not-Track" signals in compliance with California law. Nonetheless, there exist technical methods to mitigate some tracking. Please refer to the “Your Access to and Control Over Your Information” section for further details.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">Utilization of Feedback</h2>
                    <p className="mrg-t">We highly value the feedback provided by our users at Eara Hearing. Any feedback shared with us may be utilized and disclosed for various purposes, provided that such feedback is not linked to your Personal Information. We collect all information contained within feedback and handle any associated Personal Information in accordance with our Privacy Policy.</p>
                    <p className="mrg-t">By submitting feedback to us, you agree that such comments, as well as any emails or interactions through our Chat option, become the property of Eara Hearing. We may use feedback for marketing purposes or to enhance and modify our services, without being obligated to compensate you with royalties or other forms of remuneration.</p>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">Use of the Online Hearing Screening and Disclaimer</h2>
                    <ol className="mrg-t use-hearing-test-rules">
                        <li>By completing our complimentary online hearing screener and consenting to this policy, you expressly agree to the processing of information as outlined in the Eara Hearing Privacy Policy.</li>
                        <li className="mrg-t">You hereby grant Eara Hearing a transferable, sub-licensable, royalty-free, worldwide, perpetual license to utilize any anonymous and aggregated data uploaded to the Site and/or App for medical, clinical, and/or commercial research purposes.</li>
                        <li className="mrg-t">Should you choose to discontinue the services, Eara Hearing will retain your personal information and services indefinitely. By doing so, you also consent to the continued usage of this information, solely in an anonymous form, for medical, clinical, and commercial research, as well as for testing the Services software.</li>
                    </ol>
                </div>
                <div className="mrg-t">
                    <h2 className="text headline text-bold underline">Miscellaneous</h2>
                    <p className="mrg-t">This Policy and the privacy practices of Eara Hearing are governed exclusively by the laws of the United States. Please note that Eara Hearing servers are situated in the United States. Eara Hearing does not assert that this Policy and our practices adhere to the laws of any other country or jurisdiction.</p>
                    <p className="mrg-t">Users accessing the Site and/or App from outside the United States do so at their own discretion and are responsible for compliance with local laws, if and when applicable. By utilizing the Site and/or App from outside the United States, you consent to the transfer.</p>
                    <p className="mrg-t">In the event of a merger, acquisition, or any form of asset sale, the Site, our Platform, and the information collected, processed, and maintained through our Platform may be included in the assets transferred to the acquirer. You agree that Eara Hearing may transfer or assign the information collected about you in connection with any such event. In situations of bankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, Eara Hearing may not retain control over how your personal information is treated, transferred, or utilized.</p>
                    <div className="mrg-t">
                        <p className="underline">State or Country of residence</p>
                        <p className="mrg-t">A clear description of the information or content you wish to receive, delete, or correct, or the action you want taken. Adequate details to help us locate the content or information requiring deletion, removal, or correction.</p>
                        <p className="mrg-t">For security purposes, we will only process requests concerning Personal Information associated with the email address used to submit the request. Additionally, depending on the nature of your inquiry, request, or complaint, we may need to verify your identity and may require proof of identity, such as a government-issued ID and proof of address.</p>
                        <p className="mrg-t">To stop receiving communications from us, please contact us using the information provided in the "Contact Us" section below.</p>
                    </div>
                    <div className="mrg-t">
                        <p className="underline">Children</p>
                        <p className="mrg-t">Eara Hearing does not permit children under the age of 18 to utilize the Eara Hearing Service and/or Chat option, and we do not intentionally gather or retain Personal Information from individuals under 18 years old. Safeguarding the privacy of children is of utmost importance to us. Therefore, if we become aware that a user is under 18, we will take appropriate measures to remove their Personal Information from our databases. By utilizing the Eara Hearing Service and/or Chat option, you affirm that you are at least 18 years old.</p>
                    </div>
                </div>
                <div className="mrg-t">
                    <h1 className="text headline text-bold">Collection and Use of Personal Information</h1>
                    <div className="mrg-t">
                        <p className="underline">1. Personal Information</p>
                        <p className="mrg-t">In general, we collect Personal Information voluntarily submitted through the Eara Hearing Service. Additionally, information provided on our Eara Hearing Platforms is collected as outlined in the Eara Hearing Privacy Policy.</p>
                        <p  className="mrg-t ">When utilizing features of the Eara Hearing Service, we collect any information voluntarily provided. We may also request optional information to enhance your experience, such as your year of birth, gender, and other demographic details.</p>
                        <p  className="mrg-t ">When ordering our products or services, you will be required to provide payment information, including credit card details, to enable our service providers to process your payment.</p>
                        <p  className="mrg-t ">If you opt to receive information about products or services via email, we will collect your email address and relevant details to facilitate the delivery of this information.</p>
                    </div>
                    <div className="mrg-t">
                        <p className="underline">2. Personal Information from Other Sources</p>
                        <p  className="mrg-t ">We may receive Personal Information from sources with which you are registered, companies we have partnered with, or other third-party sources. This information may be associated with other Personal Information collected about you.</p>
                    </div>
                    <div className="mrg-t">
                        <p className="underline">3. Information Collected by Automated Means</p>
                        <p  className="mrg-t ">For details regarding Cookies and information collected via technology, please refer to our Eara Hearing Privacy Policy.</p>
                        <p  className="mrg-t ">At Eara Hearing, we provide you with choices regarding the collection, usage, and sharing of your Personal Information. If you wish to stop receiving promotional communications from us, you can indicate your preference by opting out. Simply follow the opt-out or unsubscribe instructions provided in the promotional emails or messages you receive, or contact us directly using the contact information below.</p>
                        <p  className="mrg-t ">If you would like your Personal Information to be deleted, please reach out to us at support@earahearing.com. However, please note that we may be obligated by law or other requirements to retain this information and may not be able to fulfill your deletion request immediately. Upon meeting such obligations, we will comply with your deletion request. When Personal Information is deleted, it will be removed from our active database but may still be retained in our archives.</p>
                    </div>

                </div>
                <div className="mrg-t">
                    <h1 className="text headline text-bold">Feedback</h1>
                    <p className="mrg-t">If you offer feedback to Eara Hearing, we may utilize and disclose it for any purpose, provided that we do not link it to your Personal Information. We will gather any information contained within such feedback and handle the Personal Information in accordance with the Eara Hearing Privacy Policies.</p>
                    <p className="mrg-t">By providing comments or sending us emails, you agree that such correspondence becomes our property. We may utilize feedback for marketing purposes or to enhance </p>
                    <p>If you have any inquiries or concerns regarding the Eara Hearing Privacy Policies, please feel free to reach out to us at: <span className="text-bold underline">support@earahearing.com.</span></p>
                    <p className="mrg-t">We retain the right to modify the Eara Hearing Privacy Policies as deemed necessary, and we will inform you of any significant alterations in how we utilize your Personal Information. Should you disagree with any of these changes, you must opt out of the Eara Hearing Service and discontinue the use of the Eara Hearing Platforms and Chat option.</p>
                </div>
            </div>
        </div>
    )
}


export default PrivacyPolicy