// model for each task
class Task {
  constructor(id, title, description, createdAt, priority, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.priority = priority;
    this.status = status;
  }
}

module.exports = Task;
