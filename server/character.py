MAX_EXP = 300


def calc_next_level_exp(level):
    return min(30 + 40 * level * 1.2 ** level, MAX_EXP)


def update_character(
    character: dict, skill_exps: dict = None, quest: dict = None, quest_type=None
) -> dict:
    if quest and quest_type:
        character = update_quests(character, quest, quest_type)
    if skill_exps:
        character = update_skills(character, skill_exps)
    return character


def update_skills(character: dict, skill_exps: dict) -> dict:
    for skill, exp in skill_exps.items():
        cur_exp = character["skills"][skill]["exp"]
        next_level_exp = character["skills"][skill]["next_level_exp"]
        level = character["skills"][skill]["level"]
        if cur_exp + exp >= next_level_exp:
            level += 1
            cur_exp = exp - (next_level_exp - cur_exp)
            next_level_exp = calc_next_level_exp(level)
        else:
            cur_exp += exp
        character["skills"][skill]["exp"] = cur_exp
        character["skills"][skill]["next_level_exp"] = next_level_exp
        character["skills"][skill]["level"] = level
    return character


def update_quests(character: dict, quest: dict, quest_type: str) -> dict:
    character["skills"][quest_type]["quest"] = quest
    return character
