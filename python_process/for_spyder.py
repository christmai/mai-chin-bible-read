import pandas as pd

df = pd.read_csv('tableconvert_csv_ljmsa6.csv')

domain_name_url = 'my.bible.com'
prefix_url = '/zh-TW/bible/1392'

# website_url = 'https://my.bible.com/zh-TW/bible/1392/REV.1.CCB'
website_url = 'https://' + domain_name_url + prefix_url + '/'

chapter_mapping_dict = {
    '創世記': 'GEN',
    '出埃及記': 'EXO',
    '利未記': 'LEV',
    '民數記': 'NUM',
    '申命記': 'DEU',
    '約書亞記': 'JOS',
    '士師記': 'JDG',
    '路得記': 'RUT',
    '撒母耳記上': '1SA',
    '撒母耳記下': '2SA',
    '列王紀上': '1KI',
    '列王紀下': '2KI',
    '歷代志上': '1CH',
    '歷代志下': '2CH',
    '以斯拉記': 'EZR',
    '尼希米記': 'NEH',
    '以斯帖記': 'EST',
    '約伯記': 'JOB',
    '詩篇': 'PSA',
    '箴言': 'PRO',
    '傳道書': 'ECC',
    '雅歌': 'SNG',
    '以賽亞書': 'ISA',
    '耶利米書': 'JER',
    '耶利米哀歌': 'LAM',
    '以西結書': 'EZK',
    '但以理書': 'DAN',
    '何西阿書': 'HOS',
    '約珥書': 'JOL',
    '阿摩司書': 'AMO',
    '俄巴底亞書': 'OBA',
    '約拿書': 'JON',
    '彌迦書': 'MIC',
    '那鴻書': 'NAM',
    '哈巴谷書': 'HAB',
    '西番雅書': 'ZEP',
    '哈該書': 'HAG',
    '撒迦利亞書': 'ZEC',
    '瑪拉基書': 'MAL',
    '馬太福音': 'MAT',
    '馬可福音': 'MRK',
    '路加福音': 'LUK',
    '約翰福音': 'JHN',
    '使徒行傳': 'ACT',
    '羅馬書': 'ROM',
    '哥林多前書': '1CO',
    '哥林多後書': '2CO',
    '加拉太書': 'GAL',
    '以弗所書': 'EPH',
    '腓立比書': 'PHP',
    '歌羅西書': 'COL',
    '帖撒羅尼迦前書': '1TH',
    '帖撒羅尼迦後書': '2TH',
    '提摩太前書': '1TI',
    '提摩太後書': '2TI',
    '提多書': 'TIT',
    '腓利門書': 'PHM',
    '希伯來書': 'HEB',
    '雅各書': 'JAS',
    '彼得前書': '1PE',
    '彼得後書': '2PE',
    '約翰一書': '1JN',
    '約翰二書': '2JN',
    '約翰三書': '3JN',
    '猶大書': 'JUD',
    '啟示錄': 'REV',
}

short_chapter_mapping = {
    '創': '創世記',
    '出': '出埃及記',
    '利未記': '利未記',
    '民數記': '民數記',
    '申命記': '申命記',
    '約書亞': '約書亞記',
    '士師記': '士師記',
    '路得記': '路得記',
    '撒上': '撒母耳記上',
    '撒下': '撒母耳記下',
    '王上': '列王紀上',
    '王下': '列王紀下',
    '代上': '歷代志上',
    '代下': '歷代志下',
    '以斯拉': '以斯拉記',
    '尼希米': '尼希米記',
    '以斯帖': '以斯帖記',
    '約伯記': '約伯記',
    '詩篇': '詩篇',
    '箴言': '箴言',
    '傳道書': '傳道書',
    '雅歌': '雅歌',
    '賽': '以賽亞書',
    '耶利米': '耶利米書',
    '哀': '耶利米哀歌',
    '以西結': '以西結書',
    '但以理': '但以理書',
    '何西阿': '何西阿書',
    '約珥書': '約珥書',
    '阿摩司': '阿摩司書',
    '俄巴底亞': '俄巴底亞書',
    '約拿書': '約拿書',
    '彌迦書': '彌迦書',
    '那鴻書': '那鴻書',
    '哈巴谷': '哈巴谷書',
    '西番雅': '西番雅書',
    '哈該書': '哈該書',
    '撒迦利亞': '撒迦利亞書',
    '瑪拉基': '瑪拉基書',
    '太': '馬太福音',
    '可': '馬可福音',
    '路': '路加福音',
    '約': '約翰福音',
    '徒': '使徒行傳',
    '羅': '羅馬書',
    '林前': '哥林多前書',
    '林後': '哥林多後書',
    '加拉太': '加拉太書',
    '以弗所': '以弗所書',
    '腓利比': '腓立比書',
    '歌羅西': '歌羅西書',
    '帖前': '帖撒羅尼迦前書',
    '帖後': '帖撒羅尼迦後書',
    '提前': '提摩太前書',
    '提後': '提摩太後書',
    '提多書': '提多書',
    '腓利門書': '腓利門書',
    '希伯來書': '希伯來書',
    '雅各書': '雅各書',
    '彼前': '彼得前書',
    '彼後': '彼得後書',
    '約壹': '約翰一書',
    '約貳': '約翰二書',
    '約參': '約翰三書',
    '猶大書': '猶大書',
    '啟示錄': '啟示錄',
}

def section_to_url(section_str):
    short_chapte_str = section_str.split(' ')[0]
    chapter_url_str = chapter_mapping_dict[
        short_chapter_mapping[short_chapte_str]
    ]
    chapte_number_str = '1'
    if len(section_str.split(' ')) > 1:
        chapte_number_str = section_str.split(' ')[1].split('-')[0]
    # translation_str = 'CCB'
    # section_url_a = website_url + chapter_url_str + '.' + chapte_number_str + '.' + translation_str
    section_url_a = website_url + chapter_url_str + '.' + chapte_number_str
    # REV.1.CCB
    return section_url_a


text_str = ''
for index, row in df.iterrows():
    append_str = ''
    append_str = append_str + '{'
    append_str = append_str + '\n'
    append_str = append_str + 'key: ' + str(index) + ','
    append_str = append_str + '\n'
    append_str = append_str + 'date: \'' + row['日期'] + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionA: \'' + row['經文A'] + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionUrlA: \'' + section_to_url(row['經文A']) + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionB: \'' + row['經文B'] + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionUrlB: \'' + section_to_url(row['經文B']) + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionC: \'' + row['經文C'] + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionUrlC: \'' + section_to_url(row['經文C']) + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionD: \'' + row['經文D'] + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'sectionUrlD: \'' + section_to_url(row['經文D']) + '\','
    append_str = append_str + '\n'
    append_str = append_str + 'checkBox: false,'
    append_str = append_str + '\n'
    append_str = append_str + '},'
    append_str = append_str + '\n'
    text_str = text_str + append_str
