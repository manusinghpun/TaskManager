<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\event;
use App\Category;
use Carbon\Carbon;
use DB;
use Symfony\Component\HttpFoundation\Response;

class ExportController extends Controller
{
    public function index()
    {
        //
    }

    public function card(Request $request)
    { 
        $request->validate([
            'start_date' => 'required|before_or_equal:finish_date',
            'finish_date' => 'required|after_or_equal:start_date',
        ]);

        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor('template/card.docx');
        $templateProcessor->setValue('date',date('d M Y H:i:s'));

       // $date = new Carbon();    
      // $date = $date->addDays(3);
        $fromDate = $request->start_date;
        $toDate = $request->finish_date;


        $arrayDates = [];

        while(strtotime($fromDate) <= strtotime($toDate)){
            $arrayDates[]= $fromDate;
            $fromDate = date('Y-m-d', strtotime("+1 day", strtotime($fromDate)));
        }
        
        foreach($arrayDates as $dkey=>$arrayDate){
            $dvalues[$dkey]['todayDate'] = htmlspecialchars(date('d M Y (D)', strtotime($arrayDate)));
        }       
        $templateProcessor->cloneBlock('TABLECLONE',count($arrayDates));
        foreach($dvalues as $value){
            foreach($value as $k=>$v)
                $templateProcessor->setValue($k, $v, 1);
        }

        //sql query to display events
        foreach($arrayDates as $dkey=>$arrayDate){
            
            $fromDate = $arrayDate." 00:00:01";    
            $toDate = $arrayDate." 23:59:59";     
           // $dvalues[$dkey]['todayDate'] = htmlspecialchars(date('d M Y (D)', strtotime($arrayDate)));
           $Events = Event::with(['category'])->whereNotIn('category_id',[14,18,15,16])->whereNotIn('fullDay',[1])
           ->where('events.start_time','<=', $toDate)
           ->where('events.finish_time','>=',$fromDate)
           ->orderBy('start_time','asc')->get();


            $values = [];
            foreach($Events as $key=>$events){
                $values[$key]['event'] = htmlspecialchars($events->topic);
                $values[$key]['from'] = date('H:i', strtotime($events->start_time));
                $values[$key]['venue'] = htmlspecialchars($events->venue);
                $values[$key]['dress'] = htmlspecialchars($events->dressCode);
            }
            $templateProcessor->cloneRowAndSetValues('event',$values);
            //for birthday and anniversary
            $bEvents = Event::with(['category'])->whereIN('category_id',[14,18])->orderBy('start_time','asc')->where('events.start_time','<=', $toDate)->where('events.finish_time','>=',$fromDate)->get();
            $bvalues = [];
            foreach($bEvents as $bkey=>$bevents){
                $bvalues[$bkey]['bEvent'] = htmlspecialchars($bevents->topic);
                $bvalues[$bkey]['bCategory'] = htmlspecialchars($bevents->event->name);
            }
            $templateProcessor->cloneRowAndSetValues('bEvent',$bvalues);

            //for fullday events
            $fEvents = Event::with(['category'])->whereIN('fullDay',[1])->whereNotIn('category_id',[14,18])->where('events.start_time','<=', $toDate)->where('events.finish_time','>=',$fromDate)->orderBy('start_time','asc')->get();
            $fvalues = [];
            foreach($fEvents as $fkey=>$fevents){
                $fvalues[$fkey]['allDayEvent'] = htmlspecialchars($fevents->topic);
                $fvalues[$fkey]['allDayEventDate'] = date('d M', strtotime($fevents->start_time))."-".date('d M', strtotime($fevents->finish_time));
            }
            $templateProcessor->cloneRowAndSetValues('allDayEvent',$fvalues);

        }   

        $templateProcessor->saveAs(storage_path('app/public/export/card.docx')); 


        //$templateProcessor->saveAs(storage_path('template/card.docx'));    

       //return response()->download(storage_path('card.docx'),200);


    }

    public function other (Request $request){
        //this is to print card categorywise
        if($request->visitFromDate){
            $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor('visit.docx');
            $templateProcessor->setValue('date',date('d M Y H:i:s'));
    
            
            $fromDate = $request->visitFromDate." 00:00:01";
            $toDate = $request->visitToDate." 23:59:59";
         
    
    
            $Events = Event::with(['event'])->whereIn('events.event_id',$request->event_filter)->where('events.start_time','<=', $toDate)->where('events.finish_time','>=',$fromDate)->orderBy('start_time','asc')->get();
            $values = [];
            foreach($Events as $key=>$events){
                $values[$key]['event'] = htmlspecialchars($events->topic);
                $values[$key]['from'] = date('d M y', strtotime($events->start_time));
                $values[$key]['to'] = date('d M y', strtotime($events->finish_time));
               // $values[$key]['comments'] = htmlspecialchars($events->comments);
            }
            $templateProcessor->cloneRowAndSetValues('event',$values);  
    
    
            $templateProcessor->saveAs(storage_path('Visit Print.docx'));    
    
            return response()->download(storage_path('Visit Print.docx'));
            }
            
    }

    

 
}
