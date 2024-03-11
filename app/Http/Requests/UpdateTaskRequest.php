<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return  [
            'title' => 'required_without_all:description,category_id|string',
            'description' => 'required_without_all:title,category_id|string',
            'category_id' => 'required_without_all:title,description|integer',
        ];
    }
}
