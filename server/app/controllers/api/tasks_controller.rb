module Api
  class TasksController < ApplicationController

    def index
      tasks = Task.all
      render json: tasks
    end

    def show
      task = Task.find(params[:id])
      render json: task
    end

    def create
      task = Task.create!(name: params[:name], description: params[:description])
      render json: task
    end

    def update
      task = Task.find(params[:id])
      task.update_attributes!(name: params[:name], description: params[:description])
      render json: task
    end

    def destroy
      task = Task.find(params[:id])
      task.destroy
      render json: task
    end

  end
end