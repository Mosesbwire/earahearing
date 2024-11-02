#!/usr/bin/env python3

hearing_loss_description = {
    "mild": "Your hearing might feel a little off sometimes. Noisy environments like parties or busy streets can make it harder to follow conversations clearly. You might subconsciously turn the TV volume up a notch. Speech can sound muffled at times, leading you to miss certain words or misunderstand what's being said.",
    "moderate": "If you have moderate hearing loss, everyday activities can become more challenging. You might find yourself needing to turn up the TV volume significantly or rely on closed captions to fully understand what's being said. Conversations, especially in noisy environments or with multiple people speaking, can be difficult to follow. This can lead to social withdrawal or a reluctance to ask people to repeat themselves.",
    "severe": "Following conversations can be very difficult in any environment, regardless of noise level. You likely rely heavily on closed captions (CC) to understand television programs. Using the speakerphone is essential for phone calls. Effective communication requires a quiet setting with only one person speaking at a time."
}

NORMAL = 'normal'
MILD = 'mild'
MODERATE = 'moderate'
SEVERE = 'severe'


def calculate_hearing_score(hearing_test_data: dict):
    "calculates mean score of the hearing data"
    total = 0
    items = 0

    for i in hearing_test_data.values():
        total += int(i)
        items += 1
    
    return total / items


def hearing_loss_level(hearing_test_data: dict):
    level = calculate_hearing_score(hearing_test_data)

    if level <= 25:
        return NORMAL
    elif level > 25 and level <= 35:
        return MILD
    elif level > 35 and level <= 64:
        return MODERATE
    else:
        return SEVERE


def get_hearing_loss_description(hearing_test_data: dict):
    level = hearing_loss_level(hearing_test_data)
    return hearing_loss_description[level]

def is_same_hearing_loss_in_both_ears(left_ear_test_data, right_ear_test_data):
    left = get_hearing_loss_description(left_ear_test_data)
    right = get_hearing_loss_description(right_ear_test_data)
    return left == right
    