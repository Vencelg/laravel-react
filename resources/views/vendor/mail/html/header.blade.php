<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Creative Hill College')
                <img src="http://82.208.16.123:8080/images/chcLogo.png" class="logo" alt="CHC Logo">
            @else
                {{ $slot }}
            @endif
        </a>
    </td>
</tr>
