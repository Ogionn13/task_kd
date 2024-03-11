<?php

namespace App\Http\Controllers;

use App\DTO\TaskFilter;
use App\Http\Requests\SelectTaskRequest;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use App\Repository\TaskRepository;


class TaskController extends Controller
{
    protected TaskRepository $taskRepository;

    public function __construct( TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
       Task::create($data);

    }

    public function show(Task $task)
    {
        return $task->load(['category']);
    }

    public function index()
    {
        return $this->taskRepository->getTasks();
    }

    public function select(SelectTaskRequest $request)
    {
        $filter = new TaskFilter();
        $filter->category_id =  $request->input('category_id');
        return $this->taskRepository->getTasksWithFilter($filter);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $data = $request->validated();
        $task->fill($data);
        $task->save();
    }
}
