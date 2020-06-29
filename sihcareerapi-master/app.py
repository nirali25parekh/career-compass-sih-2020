from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin
import praw
import csv
import datetime
import pandas as pd

app = Flask(__name__)
CORS(app, support_credentials=True)

# Create an app: https://www.reddit.com/prefs/apps
# Use http://localhost:8080 as redirect uri
username = "digitalchaos123"
password = "digitalchaos123"
clientid = "8Lqn66LhUBDv-w"
clientsecret = "hpMcf-vtl5TTvTc1jfm85GoJJ_Q"

#Source: https://www.iccb.org/iccb/wp-content/pdfs/adulted/tdl_bridge_curriculum/tdl_career_awareness/tdl_career_aware_resource_file/Suggested_Careers_for_MBTI.pdf
careers={'ESTJ':['Military', 'business administrators', 'managers', 'police/detective work', 'judges', 'financial officers', 'teachers', 'sales representatives', 'government workers', 'insurance agents', 'underwriters', 'nursing administrators', 'trade' ,'technical teachers'],
         'ISTJ':['Business executives', 'administrators','managers', 'accountants', 'police', 'detectives', 'judges', 'lawyers', 'medical doctors', 'dentists', 'computer programmers', 'systems analysts', 'computer specialists', 'auditors', 'electricians', 'math teachers', 'mechanical engineers', 'steelworkers', 'technicians'],
         'ESFJ':['Home economics', 'nursing', 'teaching', 'administrators', 'child care', 'family practice physician', 'clergy', 'office managers', 'counselors', 'social workers', 'bookkeeping', 'accounting', 'secretaries', 'organization leaders', 'dental assistants', 'radiological technologists', 'receptionists', 'religious educators', 'speech pathologists'],
         'ISFJ':['Interior decorators', 'designers', 'nurses', 'administrators', 'managers', 'secretaries', 'child care/early childhood development', 'social work', 'counselors', 'paralegals', 'clergy', 'office managers', 'shopkeepers', 'bookkeepers', 'gardeners', 'clerical supervisors', 'curators', 'family practice physicians', 'health service workers', 'librarians', 'medical technologists', 'typists'],
         'ESTP':['Sales representatives', 'marketers', 'police', 'detectives', 'paramedics', 'medical technicians', 'computer technicians', 'computer technical support', 'entrepreneurs', 'comedians', 'agents', 'firefighters', 'military', 'auditors', 'carpenters', 'craft workers', 'farmers', 'laborers', 'service workers', 'transportation operatives'],
         'ESFP':['Actors', 'painters', 'comedians', 'sales representatives', 'teachers', 'counselors', 'social workers', 'child care', 'fashion designers', 'interior decorators',' consultants', 'photographers', 'musicians', 'human resources managers', 'clerical supervisors', 'coaches', 'factory supervisors', 'food service workers', 'receptionists', 'recreation workers', 'religious educators', 'respiratory therapists'],
         'ISFP':['Artists', 'musicians', 'composers', 'designers','child care workers', 'social workers', 'counselors', 'teachers', 'veterinarians', 'forest rangers', 'bookkeepers', 'carpenters', 'personal service workers', 'clerical supervisors', 'secretaries', 'dental and medical staffers', 'waiters/waitresses', 'chefs', 'nurses', 'mechanics', 'physical therapists', 'x-ray technicians'],
         'ENFJ':['Teachers', 'consultants', 'psychiatrists', 'social workers', 'counselors', 'clergy', 'sales representative', 'human resources', 'managers', 'events coordinators', 'politicians', 'diplomats', 'writers', 'actors', 'designers', 'musicians', 'religious workers', 'writers'],
         'INFJ':['Counselors', 'clergy', 'missionaries', 'teachers', 'medical doctors', 'dentists', 'chiropractors', 'psychologists', 'psychiatrists', 'writers', 'musicians', 'artists', 'psychics', 'photographers', 'child care workers', 'education consultants', 'librarians', 'marketers', 'scientists', 'social workers'],
         'ISTP':['Police', 'detectives', 'forensic pathologists', 'computer programmers', 'system analysts', 'computer specialists', 'engineers', 'carpenters', 'mechanics', 'pilots', 'drivers', 'athletes', 'entrepreneurs', 'firefighters', 'paramedics', 'construction workers', 'dental hygienists', 'electrical engineers', 'farmers', 'military', 'probation officers', 'steelworkers', 'transportation operatives'],
         'ENFP':['Actors', 'journalists', 'writers', 'musicians', 'painters', 'consultants', 'psychologists', 'psychiatrists', 'entrepreneurs', 'teachers', 'counselors', 'politicians', 'television' 'reporters', 'marketers', 'scientists', 'sales representatives', 'artists', 'clergy', 'public relations', 'social scientists', 'social workers'],
         'INFP':['Writers', 'artists', 'counselors', 'social workers', 'English teachers', 'fine arts teachers', 'child care workers', 'clergy', 'missionaries', 'psychologists', 'psychiatrists', 'scientists', 'political activists', 'editors', 'education consultants', 'journalists', 'religious educators', 'social scientists'],
         'ENTJ':['Business executives', 'CEOs', 'organization founders', 'business administrators', 'managers', 'entrepreneurs', 'judges', 'lawyers', 'computer consultants', 'university professors', 'politicians', 'credit investigators', 'labor relations worker', 'marketing department manager', 'mortgage banker', 'systems analysts', 'scientists'],
         'INTJ':['Scientists', 'engineers', 'professors', 'teachers', 'medical doctors', 'dentists', 'corporate strategists', 'organization founders', 'business administrators', 'managers', 'military', 'lawyers', 'judges', 'computer programmers', 'system analysts', 'computer specialists', 'psychologists', 'photographers', 'research department managers', 'researchers', 'university instructors'],
         'ENTP':['Entrepreneurs', 'lawyers', 'psychologists', 'photographers', 'consultants', 'sales representatives', 'actors', 'engineers', 'scientists', 'inventors', 'marketers', 'computer programmers', 'comedians', 'computer analysts', 'credit investigators', 'journalists', 'psychiatrists', 'public relations', 'designers', 'writers', 'artists', 'musicians', 'politicians'],
         'INTP':['Physicists', 'chemists', 'biologists', 'photographers', 'strategic planners', 'mathematicians', 'university professors','computer programmers', 'computer animators', 'technical writers', 'engineers', 'lawyers', 'forensic researchers', 'writers', 'artists', 'psychologists', 'social scientists', 'systems analysts', 'researchers', 'surveyors']
         }


reason={
        'ESTJ':'Natural leaders, you work best when you are in charge and enforcing the rules.',
        'ISTJ':'You have a knack for detail and memorization, but work more behind the scenes instead of up front as a leader',
        'ESFJ':'You do best in jobs where you can apply their natural warmth at building relationships with other people.',
        'ISFJ': 'Tradition-oriented and down-to-earth, you do best in jobs where you can help people achieve your goals, or where structure is needed',
        'ESTP': 'You have a gift for reacting to and solving immediate problems, and persuading other people.',
        'ISTP': 'With the ability to stay calm under pressure, you excel in any job which requires immediate action',
        'ESFP': 'Optimistic and fun-loving, your enthusiasm is great for motivating others.',
        'ISFP': 'You tend to do well in the arts, as well as helping others and working with people.',
        'ENFJ': 'You have a gift of encouraging others actualize themselves, and provide excellent leadership.',
        'INFJ': 'Blessed with an idealistic vision, you do best when you seek to make that vision a reality.',
        'ENFP': 'Very creative and fun-loving, you excel at careers which allow you to express your ideas and spontaneity.',
        'INFP': 'Driven by a strong sense of personal values, you are also highly creative and can offer support from behind the scenes',
        'ENTJ': 'You are born to lead and can steer the organization towards your vision, using your excellent organizing and understanding of what needs to get done.',
        'INTJ': 'You have a particular skill at grasping difficult, complex concepts and building strategies.',
        'ENTP': 'Very freedom-oriented, you need a career which allows you to act independent and express your creativity and insight.',
        'INTP': 'Highly analytical, you can discover connections between two seemingly unrelated things, and work best when allowed to use your imagination and critical thinking.'

}

def mine_reddit():
    x = request.form.get('file')
    def writeheaders():
        f.writerow(["Number", "Keyword", "Title", "Score", "Comments", "URL", "Domain", "Permalink", "ID", "Subreddit",
                    "CreatedDate"])

    def writefields():
        f.writerow([startNum, search.strip(), submission.title,
                    submission.score, submission.num_comments,
                    submission.url, submission.domain, submission.permalink, submission.id,
                    submission.subreddit, datetime.datetime.utcfromtimestamp(submission.created).strftime('%m-%d-%Y')])

    reddit = praw.Reddit(client_id=clientid,
                         client_secret=clientsecret,
                         password=password,
                         user_agent='Reddit search data extractor by /u/' + username + '',
                         username=username)

    print("Authentication for " + str(reddit.user.me()) + " is verified. Proceeding.\r\n")

    outfilename = 'reddit-data.csv'

    sortsub = 'relevance'
    filtersub = 'No'

    search_list = careers[x][:3]

    if (filtersub.lower() == "yes"):
        subreddit = input("Enter the subreddit names delimited with commas (i.e., BigSEO):\r\n")
        subreddit_list = subreddit.split(',')
        file = open(outfilename, "w+", newline="\n", encoding="utf-8")
        f = csv.writer(file)
        writeheaders()
        for subs in subreddit_list:
            for search in search_list:
                startNum = 0
                for submission in reddit.subreddit(subs.strip()).search(search, sort=sortsub):
                    startNum += 1
                    writefields()
                print(
                    "Writing out posts results for the search '" + search.strip() + "' in 'r/" + subs.strip() + "'\r\n")
            file.close
    else:
        file = open(outfilename, "w+", newline="\n", encoding="utf-8")
        f = csv.writer(file)
        writeheaders()
        for search in search_list:
            startNum = 0
            for submission in reddit.subreddit('all').search(search.lower(), sort=sortsub):
                startNum += 1
                writefields()
            print("Writing out posts results for the search '" + search.strip() + "' in 'r/all'\r\n")
        file.close


def preprocess():
    df=pd.read_csv('reddit-data.csv')
    df=pd.DataFrame(df)
    df=df.groupby('Keyword').head(5)
    df=df[['Keyword','URL','Domain','Permalink','Subreddit','CreatedDate']]
    Row_list=[]
    for index,rows in df.iterrows():
        my_list=[rows.Keyword,rows.URL,rows.Domain,rows.Permalink,rows.Subreddit,rows.CreatedDate]
        Row_list.append(my_list)
    return Row_list





@app.route('/domain',methods=['POST'])
def get_domain():
    x=request.form.get('file')
    return(jsonify(careers[x]))


@app.route('/reason',methods=['POST'])
def get_reason():
    y=request.form.get('file')
    return(jsonify(reason[y]))

@app.route('/reddit',methods=['POST'])
def send_reddits():

    mine_reddit()
    Rlist=[]
    Rlist=preprocess()
    return jsonify(Rlist)



if __name__ == '__main__':
    app.run()
