"""
Module for generating quests.

Quest: {
    description: str,
    exp: int
}

"""

import random

fitness_quests = {
    "i started working out": {
        "description":"Work out 5 times this month",
        "exp": 5
    },
    "achieved a new PR for": {
        "description":"Achieve a new PR for ",
        "exp": 7
    },
    "I ran a half-marathon": {
        "description":"Run a full marathon",
        "exp": 7
    },
    "I ran 1 km": {
        "description":"Run a 5k",
        "exp": 10
    },
    "I hit 1 plate on my bench": {
        "description":"Hit 2 plates on your bench",
        "exp": 5
    },

    "I hit 2 plate on my bench": {
        "description":"Hit 2 plates on your bench",
        "exp": 5
    },
    "I hit 3 plate on my bench": {
        "description":"Hit 2 plates on your bench",
        "exp": 5
    },
    "I hit 1 plate on my squat": {
        "description":"Hit 2 plates on your squat",
        "exp": 5
    },
    "I hit 2 plate on my squat": {
        "description":"Hit 2 plates on your squat",
        "exp": 5
    },
    "I hit 3 plate on my squat": {
        "description":"Hit 2 plates on your squat",
        "exp": 5
    },
    "I hit 1 plate on my deadlift": {
        "description":"Hit 2 plates on your deadlift",
        "exp": 5
    },
    "I hit 2 plate on my deadlift": {
        "description":"Hit 2 plates on your deadlift",
        "exp": 5
    },
    "I hit 3 plate on my deadlift": {
        "description":"Hit 2 plates on your deadlift",
        "exp": 5
    },
}
academic_quests = {
    "I started reading ": {
        "description":"Finish reading ",
        "exp": 5
    },
    "assignment due": {
        "description":"Finish your assignment.",
        "exp": 5
    },
    "Exam on": {
        "description":"Ace your exam.",
        "exp": 10
    },
    "Midterm on": {
        "description":"Ace your midterm.",
        "exp": 10
    },
    "Hard class": {
        "description":"Don't fail any classes this semester.",
        "exp": 10
    },
    
}
career_quests = {
    "got an interview": {
        "description":"Ace your interview.",
        "exp": 5
    },
    "I want a promotion": {
        "description":"Get a promotion.",
        "exp": 10
    },
    "I want a raise": {
        "description": "Earn a raise.",
        "exp": 10
    },
    "I want to work at ": {
        "description":"Get a job from ",
        "exp": 15
    }
}
social_quests = {
    "is pretty cute": {
        "description":"Get a date with ",
        "exp": 10
    },
    "lonely": {
        "description": "Organize a hangout with friends.",
        "exp": 7
    },
    "meet people": {
        "description": "Make a new friend.",
        "exp": 5
    }
}

def get_quest(character: dict, journal_entry: dict) -> (dict, str):
    """
    Given a character dict and a text (diary entry), generate a quest or None
    """
    text = journal_entry['text']
    quests = generate_quests(text)
    chosen_quest, quest_type = choose_quest(character, quests)
    if chosen_quest is not None:

        chosen_quest['journal_entry_id'] = journal_entry['id']
    return (chosen_quest, quest_type)

def generate_quests(text: str) -> dict:
    """
    Text is the untokenized diary entry.
    Outputs a quest
    """
    print(text)
    quests = {}
    for phrase, quest in fitness_quests.items():
        if phrase.lower() in text.lower():
            if phrase.lower() == 'achieved a new pr for ':
                exercise = text.lower().partition('achieved a new pr for')[2].split()[0]
                quest['description'] = quest['description'] + exercise + '.'
                quests['fitness'] = quest
            else:
                quests['fitness'] = quest

    for phrase, quest in academic_quests.items():
        if phrase.lower() in text.lower():
            if phrase.lower() == 'i started reading ':
                book = text.lower().partition('i started reading')[2].split()[0]
                quest['description'] = quest['description'] + book + '.'
                quests['academic'] = quest
            else:
                quests['academic'] = quest
    for phrase, quest in career_quests.items():
        if phrase.lower() in text.lower():
            print('career quest')
            print(phrase)
            if phrase.lower() == 'i want to work at ':
                company = text.lower().partition('i want to work at ')[2].split()[0]
                quest['description'] = quest['description'] + company + '.'
                quests['career'] = quest
            else:
                quests['career'] = quest
    for phrase, quest in social_quests.items():
        if phrase.lower() in text.lower():
            if phrase.lower() == "is pretty cute":
                name = text.lower().partition('is pretty cute')[0].split()[-1]
                quest['description'] = quest['description'] + name + '.'
                quests['social'] = quest
            else:
                quests['social'] = quest
    return quests

def choose_quest(character: dict, quests: dict) -> (dict, str):
    """
    Randomly chooses available quests for skills without an existing quest.
    """
    quest = None
    choice = None

    to_pop = []
    print(quests)
    for skill in quests.keys():
        # print(character['skills'])
        if character['skills'][skill]['quest']['description']:
            to_pop.append(skill)

    # Todo: I don't understand what this is doing, can you let me know? This caused it to fail
    # for key in to_pop:
    #     quests.pop(key)
    # if len(quests.keys()) == 0:
    #     return None, None
    keys = [key for key in quests.keys() if not key in to_pop]
    if len(keys) == 0:
        return (quest, choice)
    choice = random.choice(keys)
    quest = quests[choice]
    return (quest, choice)