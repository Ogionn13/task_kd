<?php

namespace App\DTO;

use function Symfony\Component\Translation\t;

class TaskFilter
{

    public ?int $category_id;

    public function isHasCategoryId():bool{
        if ($this->category_id){
            return true;
        }
        return false;
    }

}
