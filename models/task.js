// model for each task
class Task {
  constructor(id, name, description, createdAt, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.status = status;
  }
}

module.exports = Task;
