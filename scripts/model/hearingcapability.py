#!/usr/bin/env python3

"""Calculate the hearing loss in each ear"""
hearing_loss = {
    "normal": [
         "Congratulations on your hearing test results! It's fantastic to know that your hearing is in great shape. To keep it that way, here are some tips for maintaining excellent health.", 
        "Limit your time in loud environments like concerts. If you are in those environment, always wear hearing protection such as earplugs or earmuffs to protect your ears.",
         "Be mindful of volume levels on your headphones or earbuds.",
         "Maintain a healthy lifestyle by drinking plenty of fluids and eating a well-balanced diet.",
         "Give your ears a rest from headphones and earbuds."
    ],
    "mild": [
        
        "Trouble hearing in some situations, especially in noisy places like crowded areas.",
        "TV volume tends to be turned up.",
        "Using the speaker phone to hear better during phone calls.",
        "Can hear people talking but don't understand some words that are being said.",
         "You may misunderstand word. For example, you might hear the word \"cat\" instead of \"cap\". This happens because the speech is not clear."  
    ],
    "moderate": [
        "Difficulty hearing conversations even in quiet environments.",
        "The TV volume may be louder than you notice; you may also use closed captions.",
        "Using the speakerphone to hear better on the phone.",
        "When people are talking in a group, it is hard to hear more than one person.",
        "You may find that instead of asking for repetition, you tend to not be involved in the conversation."
    ],
    "severe": [
        "Trouble hearing conversations in any environment.",
        "TV volume will be very loud and you will need closed captions (CC) to understand the TV.",
        "Using the speakerphone to hear better during phone calls.",
        "Communication will be very challenging unless the conversation is held in a quiet place with only one speaker at a time."
       
    ]
}

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

    def isNormalHearing(self,data: dict):
        for i in data.values():
            if int(i) > 25:
                return False
        return True
        
    def hearing_loss_level(self,hearing_test_data: dict):
        level = self.calculate_hearing_score(hearing_test_data)

        if level <= 25:
            return NORMAL if self.isNormalHearing(hearing_test_data) else MILD
        elif level > 25 and level <= 35:
            return MILD
        elif level > 35 and level <= 64:
            return MODERATE
        else:
            return SEVERE

    def normalHearing(self):
        return self.isNormalHearing(self.left_ear_data) and self.isNormalHearing(self.right_ear_data)
      
    def get_hearing_loss_description(self, hearing_loss_level):
        return hearing_loss[hearing_loss_level]

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