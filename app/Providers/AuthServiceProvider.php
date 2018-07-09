<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define("edit-reply", function($user, $reply) {
            return $user->id == $reply->user->id;
        });
        Gate::define("delete-reply", function($user, $reply) {
            return $user->id == $reply->user->id;
        });

        Gate::define("edit-review", function($user, $review) {
            return $user->id == $review->user->id;
        });
        Gate::define("delete-review", function($user, $review) {
            return $user->id == $review->user->id;
        });

        Gate::define("edit-profile", function($user, $profileUser) {
            return $user->id == $profileUser->id;
        });
    }
}
