<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Problem;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProblemPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function deleteOne(User $user, Problem $problem)
    {
        return $user->id === $problem->user_id;
    }
}
