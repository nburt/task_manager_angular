require 'rails_helper'

describe "CRUDing Tasks" do
  describe "POST /api/tasks" do
    it "returns json upon a successful task creation" do
      task_count = Task.count

      post "/api/tasks", {name: "Get Groceries", description: "Monday"}

      expect(Task.count).to eq task_count + 1

      task = Task.last

      expected_response = {
        id: task.id,
        name: task.name,
        description: task.description,
        created_at: task.created_at,
        updated_at: task.updated_at
      }.to_json

      expect(response.status).to eq 200
      expect(response.body).to eq expected_response
    end

  end

  describe "GET /api/tasks" do
    it "returns json for all tasks on a successful get to /api/tasks" do

      task1 = create_task
      task2 = create_task(name: "Wash Clothes", description: "Saturday")
      task3 = create_task(name: "Mow Lawn", description: "Sunday")

      get "/api/tasks"

      expected_response = [
        {
          id: task1.id,
          name: task1.name,
          description: task1.description,
          created_at: task1.created_at,
          updated_at: task1.updated_at
        },
        {
          id: task2.id,
          name: task2.name,
          description: task2.description,
          created_at: task2.created_at,
          updated_at: task2.updated_at
        },
        {
          id: task3.id,
          name: task3.name,
          description: task3.description,
          created_at: task3.created_at,
          updated_at: task3.updated_at
        }
      ].to_json

      expect(response.status).to eq 200
      expect(response.body).to eq expected_response
    end
  end

  describe "GET /api/tasks/:id" do
    it "can get a single task" do
      task = create_task

      get "/api/tasks/#{task.id}"

      expected_response = {
        id: task.id,
        name: task.name,
        description: task.description,
        created_at: task.created_at,
        updated_at: task.updated_at
      }.to_json

      expect(response.status).to eq 200
      expect(response.body).to eq expected_response
    end
  end

  describe "PUT /api/tasks/:id" do
    it "will update a task and return the json for the updated task" do
      task = create_task

      put "/api/tasks/#{task.id}?name=foo&description=bar"

      task.reload
      expect(task.name).to eq "foo"
      expect(task.description).to eq "bar"

      expected_response = {
        id: task.id,
        name: task.name,
        description: task.description,
        created_at: task.created_at,
        updated_at: task.updated_at
      }.to_json

      expect(response.status).to eq 200
      expect(response.body).to eq expected_response
    end
  end

  describe "DELETE /api/tasks/:id" do
    it "will delete a task" do
      task = create_task
      task_count = Task.count

      delete "/api/tasks/#{task.id}"

      expect(Task.count).to eq task_count - 1

      expected_response = {
        id: task.id,
        name: task.name,
        description: task.description,
        created_at: task.created_at,
        updated_at: task.updated_at
      }.to_json

      expect(response.status).to eq 200
      expect(response.body).to eq expected_response
    end
  end
end