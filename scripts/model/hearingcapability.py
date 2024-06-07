#!/usr/bin/env python3

"""Calculate the hearing loss in each ear"""


hearing_loss_description = {
    "normal": "your hearing appears to be normal. This means you can detect a wide range of sounds at low volumes. While your hearing seems healthy, a consultation with our audiologist can provide further insights and answer any questions you may have. They can also discuss preventative measures to maintain good hearing health",
    "mild": "your hearing appears to have a mild hearing loss. Your hearing might occasionally feel a bit off. Noisy environments, like restaurants or crowds, can make it harder to follow conversations clearly. You might find yourself turning up the TV volume. Speech can sometimes sound muffled, causing you to miss certain words or misunderstand what's being said",
    "moderate": "your hearing appears to have a moderate hearing loss. Moderate hearing loss can present itself in various ways. You might find it challenging to follow conversations, even in quiet settings, prompting you to turn up the TV volume more than others and rely on closed captions. Difficulty understanding phone calls might lead you to prefer using speakerphone. In social settings, you may struggle to keep up with group conversations or find yourself withdrawing instead of asking people to repeat themselves",
    "severe": "your hearing appears to have severe hearing loss. This means following conversations can be challenging in any environment, regardless of noise level. You likely depend heavily on closed captions to understand television programs. Using the speakerphone is essential for phone calls. Effective communication requires a quiet setting with only one person speaking at a time"
}

NORMAL = 'normal'
MILD = 'mild'
MODERATE = 'moderate'
SEVERE = 'severe'


class HearingCapability:

    def __init__(self, right_ear_data:dict, left_ear_data:dict):
        self.right_ear_data = right_ear_data
        self.left_ear_data = left_ear_data
        
    def calculate_hearing_score(self,hearing_test_data: dict):
        "calculates mean score of the hearing data"
        total = 0
        items = 0

        for i in hearing_test_data.values():
            total += int(i)
            items += 1
    
        return total / items


    def hearing_loss_level(self,hearing_test_data: dict):
        level = self.calculate_hearing_score(hearing_test_data)

        if level <= 25:
            return NORMAL
        elif level > 25 and level <= 35:
            return MILD
        elif level > 35 and level <= 64:
            return MODERATE
        else:
            return SEVERE


    def get_hearing_loss_description(self, hearing_loss_level):
        return hearing_loss_description[hearing_loss_level]

    def get_assymetrical_hearing_loss_description(self, right_hearing_loss_level, left_hearing_loss_level):
        right_description = self.get_hearing_loss_description(right_hearing_loss_level)
        left_description = self.get_hearing_loss_description(left_hearing_loss_level) 
        return f'your hearing appears to have different levels of hearing ability in each ear. In your right ear {right_description}. While in the left ear {left_description}'
    
    def left_hearing_capability(self):
        return self.hearing_loss_level(self.left_ear_data)
    
    def right_hearing_capability(self):
        return self.hearing_loss_level(self.right_ear_data)
    
    def is_symmetrical_hearing_loss(self):
        return self.hearing_loss_level(self.left_ear_data) == self.hearing_loss_level(self.right_ear_data)