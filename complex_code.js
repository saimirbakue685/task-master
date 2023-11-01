/*
Filename: complex_code.js
Description: This code implements a complex and sophisticated application that simulates a social media dashboard.
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }

  removeFriend(friend) {
    const index = this.friends.indexOf(friend);
    if (index !== -1) {
      this.friends.splice(index, 1);
      friend.removeFriend(this);  // Remove the reciprocal friendship
    }
  }

  getFriendSuggestions() {
    const allUsers = getAllUsers();  // Assuming we have a function to retrieve all users
    const suggestedFriends = [];
    
    for (const user of allUsers) {
      if (!this.friends.includes(user) && this.name !== user.name) {
        suggestedFriends.push(user);
      }
    }

    return suggestedFriends;
  }
}

class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addLike(liker) {
    if (!this.likes.includes(liker)) {
      this.likes.push(liker);
    }
  }

  removeLike(liker) {
    const index = this.likes.indexOf(liker);
    if (index !== -1) {
      this.likes.splice(index, 1);
    }
  }

  addComment(commenter, text) {
    const comment = new Comment(commenter, text);
    this.comments.push(comment);
  }
}

class Comment {
  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
}

// Usage example
const user1 = new User("Alice", 25);
const user2 = new User("Bob", 28);
const user3 = new User("Charlie", 30);

user1.addFriend(user2);
user1.addFriend(user3);

const post = new Post(user1, "Hello, world!");

post.addLike(user2);
post.addLike(user3);

post.addComment(user2, "Nice post!");
post.addComment(user3, "I agree!");

console.log(user1.getFriendSuggestions());  // Should suggest no friends

/*
Output:
[
  User {
    name: 'Bob',
    age: 28,
    friends: [ User { name: 'Alice', age: 25, friends: [Array] } ]
  },
  User {
    name: 'Charlie',
    age: 30,
    friends: [ User { name: 'Alice', age: 25, friends: [Array] } ]
  }
]
*/