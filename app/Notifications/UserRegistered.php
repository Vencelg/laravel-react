<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserRegistered extends Notification
{
    use Queueable;


    /**
     * Create a new notification instance.
     *
     * @return void
     */

    protected $email;
    protected $password;

    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Uživateli,')
            ->subject('Byl jste zaregistrován')
            ->line('Byl jste zaregistrován adminem')
            ->line('Vaše údaje jsou: ')
            ->line('Email: ' . $this->email)
            ->line('Heslo: ' . $this->password)
            ->action('Přihlásit se můžete zde', url('/'))
            ->line('Po přihlášení budete moci své heslo změnit');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
