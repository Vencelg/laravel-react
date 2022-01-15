<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Creative Hill College')
                <img src="{{asset('storage/image/chcLogo.png')}}" class="logo" alt="CHC Logo">
            @else
                {{ $slot }}
            @endif
        </a>
    </td>
</tr>
