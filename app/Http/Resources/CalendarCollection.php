<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class CalendarCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {     
        /*     
        return [
                "title" => $this->topic,
                'start' => $this->start_time,
                'end' => $this->finish_time,
                'allDay' => $this->fullDay,
                'backgroundColor' => $this->category['color'],
                'borderColor' => $this->category['color'],
                'extendedProps' => [
                    'id' => $this->id,
                    'venue' => $this->venue,
                    'dressCode' => $this->dressCode
                ],
        ];
        */
        if($this->status == '0') {
            return [
                "title" => $this->name,
                'start' => $this->pdc." 00:00:01",
                'end' => $this->pdc." 23:59:59",
                'allDay' => "1",
                'backgroundColor' => "#0b8bb0",
                'borderColor' => "#e68585",
                'extendedProps' => [
                    'id' => $this->id,
                    'venue' => "",
                    'dressCode' => "",
                ],
            ];

        } else {
            return [
                "title" => $this->name,
                'start' => $this->pdc." 00:00:01",
                'end' => $this->pdc." 23:59:59",
                'allDay' => "1",
                'backgroundColor' => "#0b8bb0",
                'borderColor' => "#2f8440",
                'extendedProps' => [
                    'id' => $this->id,
                    'venue' => "",
                    'dressCode' => "",
                ],
            ];

        }
        

         
    }
}
