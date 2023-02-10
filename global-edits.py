from datetime import datetime
from datetime import timedelta

def get_original_line(file_path):
    import os
    print(os.getcwd())
    f = open(file_path)
    for line in f.readlines():
        if line.startswith('due_date'):
            return line

def get_replacement_line(line, time_delta, current_start):
    replace_me = line.split(' ')[1].strip()
    d = datetime.strptime(replace_me, '%Y-%m-%d')
    if d < current_start:
        d = d + time_delta
        return line.replace(replace_me, d.strftime('%Y-%m-%d'))
    return line

def do_replacement(old_line, new_line, file_path):
    with open(file_path, 'r') as file:
        filedata = file.read()
    file.close()

    # Replace the target string
    filedata = filedata.replace(old_line, new_line)

    # Write the file out again
    with open(file_path, 'w') as file:
        file.write(filedata)
    file.close()

def get_files(file_path):
    from pathlib import Path

    file_paths = []
    for path in Path(file_path).rglob('*.html'):
    # import glob, os
    # file_paths = []
    # types = ('*.md', '*.scss', '*.html')
    # for type in types:
    #     for file in glob.glob(file_path + '/' + type):
        file_paths.append(path)
    return file_paths

def migrate_date(old_date, new_date, file_path):
    past_start = datetime.strptime(old_date, '%Y-%m-%d')
    current_start = datetime.strptime(new_date, '%Y-%m-%d')
    diff = current_start - past_start
    days_to_add = diff.days
    print(diff, days_to_add)

    old_line = get_original_line(file_path)
    if old_line:
        new_line = get_replacement_line(old_line, diff, current_start)
        print(new_line)
        do_replacement(old_line, new_line, file_path)


if __name__ == '__main__':
    file_paths = get_files('.') 
    file_paths += get_files('accessibility-reference') 
    file_paths += get_files('activities') 
    file_paths += get_files('assignments')
    file_paths += get_files('css-reference') 
    file_paths += get_files('design-reference') 
    file_paths += get_files('html-reference') 
    file_paths += get_files('javascript-reference') 
    file_paths += get_files('lectures') 
    file_paths += get_files('syllabus') 
    print(file_paths)

    for file_path in file_paths:
        do_replacement('/spring2023', '', file_path)
        do_replacement('<li><a href="https://drive.google.com/drive/folders/1O7exzeo0Wg-RmAN7W20R10SSHdEt75Mx?usp=sharing" target="_blank">Videos</a></li>', '', file_path)

    '''
    In VS Code
    1. Prettier
    2. Here's the find and replace code:
        * Find: 
            (lectures\/\w*\d\d)
            (tutorials\/\w*\d\d)
            (assignments\/\w*\d\d)
            (assignments\/\w*\d-\d)
        * Replace: $1.html
    '''