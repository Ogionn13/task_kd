<?php

namespace App\Repository;

use App\DTO\TaskFilter;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class TaskRepository
{

    protected function createQueryWithCategory(): Builder
    {
        return DB::table('tasks')
            ->select(
                DB::raw(
                    'tasks.id as id, tasks.title as title, categories.title as category, date(created_at) as created_at'
                )
            )
            ->join('categories', 'tasks.category_id', '=', 'categories.id')
            ->orderBy('tasks.created_at', 'desc');
    }


    public function getTasks(): Collection
    {
        return $this->createQueryWithCategory()->get();
    }

    public function getTasksWithFilter(TaskFilter $filter): Collection
    {
        $query = $this->createQueryWithCategory();
        if ($filter->isHasCategoryId()){
            $query ->where('tasks.category_id', $filter->category_id);
        }
        return $query->get();
    }
}
