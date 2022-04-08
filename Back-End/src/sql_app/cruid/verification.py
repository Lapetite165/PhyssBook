from fastapi import HTTPException, status


def verification(crud_func):
    def wrapper(*args, **kwargs):

        crud = crud_func(*args,**kwargs)
        if crud is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Id not found",
            )
        return crud
    return wrapper