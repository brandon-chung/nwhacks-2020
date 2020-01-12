"""
Handles endpoint actions

"""
from server import quests, analyze, character

def submit_journal_entry(char: dict, journal_entry: dict):
    quest, quest_type = quests.get_quest(char, journal_entry)
    skill_exps = analyze.get_exp(journal_entry['text'])
    char = character.update_character(char, skill_exps=skill_exps, quest=quest, quest_type=quest_type)
    return char, quest_type

def delete_quest(char: dict, quest_type: str) -> dict:
    char['skills'][quest_type]['quest'] = {"description": "", "exp": 0, "journal_entry_id": ""}
    return char

def finish_quest(char: dict, quest_type: str) -> dict:
    quest_exp = char['skills'][quest_type]['quest']['exp']
    skill_exps = {quest_type: quest_exp}
    char = character.update_skills(char, skill_exps)
    delete_quest(char, quest_type)
    return char