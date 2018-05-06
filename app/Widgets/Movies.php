<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;

class Movies extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = \App\Movie::count();
        $string = 'Movies';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-video',
            'title'  => "{$count} {$string}",
            'text'   => __('voyager::dimmer.post_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => 'View all movies',
                'link' => route('voyager.movies.index'),
            ],
            'image' =>'/movie.jpg',
        ]));
    }
}
