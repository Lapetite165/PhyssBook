import shutil
import uuid


def file_import(file, path_p):
    extension = file.filename.split('.')[-1]
    name = uuid.uuid4().hex[6:]+"."+extension
    path = path_p + name
    with open(path, "wb") as buffer:        
        shutil.copyfileobj(file.file, buffer)
    return name