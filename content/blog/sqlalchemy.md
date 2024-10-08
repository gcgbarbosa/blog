+++
title = "Working with SQLAlchemy 2.0: A lightning fast guide" 
date = "2024-10-02T16:22:56-03:00"

description = "A step-by-step guide to migrating to SQLAlchemy version 2.0, covering installation, data modeling, and CRUD operations using SQLite."

tags = ["fullstack"]
+++

SQLAlchemy 2.0 was launched in 2023, but ChatGPT keeps throwing garbage at me :(
I just can't get it to generate something that compiles.
I've been defering migration for a while, but the time has come.

In this tutorial I want to show the basics of SQLAlchemy v2.
I am not going to care about the v1 at all.

## Installation

```bash
pip install sqlalchemy
```

Done.

## Things to learn

We want to cover enough for at least a CRUD.
CRUD is an acronym for Create, Read, Update, and Delete.
This sounds fair, right?
We are also using SQLite for obvious reasons.

First things first, let's import the necessary modules and create an engine.

```python
import sqlalchemy as db
engine = db.create_engine("sqlite:///./test.db" , echo=True)
```

Think of the engine in SQLAlchemy as the powerful engine of a car.
In the world of databases,
it's what makes everything move smoothly behind the scenes.

### Data model

Let's define a simple data model.

```python
from sqlalchemy.orm import DeclarativeBase, Session, Mapped, mapped_column

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(db.String(256))
    email: Mapped[str] = mapped_column(db.String(256))
```

#### Creating an user

Very straight forward.

```python
user = User(name="John Doe", email="doe@doe.com")
with Session(engine) as session:
    session.add(user)
    session.commit()
```

#### Deleting an user

Easy peasy.

```python
with Session(engine) as session:
    user = session.get(User, user_id)
    session.delete(user)
    session.commit()
```

#### Edit user

If we make mistakes :)

```python
with Session(self.engine) as session:
    user = session.get(User, user_id)
    user.name = "Jhonzito"
    session.commit()
```

#### List all users

It ain't a CRUD without listing all.

```python
result: list[User] = []
with Session(self.engine) as session:
    users = db.select(User)
    for user in session.scalars(users):
        result.append(user)
```

## Notes

Thanks everyone for the support.
This blog was supposed to be just a place that
I can go back to if I need a refresh or snippet.
You've made it great :)
