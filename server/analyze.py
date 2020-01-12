import topics
import nltk
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 


stop_words = set(stopwords.words('english')) 

skill_words = topics.fitness + topics.academic + topics.career + topics.social
skills = {'fitness': topics.fitness,
        'academic': topics.academic,
        'career': topics.career,
        'social': topics.social}

def word_counts(word_tokens: list) -> dict:
    word_counts = {}
    for word in word_tokens:
        if word in skill_words:
            word_counts[word] = word_counts.get(word, 0) + 1
    return word_counts

def calc_exp(word_counts: dict) -> dict:
    skill_exps = {}
    for word, counts in word_counts.items():
        exp = 1 + (counts * 0.7 ** counts)
        for skill, corpus in skills.items():
            if word in corpus:
                skill_exps[skill] = skill_exps.get(skill, 0) + exp
    for skill, exp in skill_exps.items():
        skill_exps[skill] = min(exp, 10)
    return skill_exps



