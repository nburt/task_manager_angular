def create_task(attributes = {})
  task = Task.new({name: "Get Groceries", description: "Monday"}.merge(attributes))
  task.save!
  task
end