> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e07-js-forms` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` JavaScript: Forms


Tym razem nasz formularz to panel rejestracji do serwisu.

Aby można było się zarejestrować, to należy wprowadzić poprawny adres email (sprawdzić, czy zawiera znak @ lub użyć odpowiedniego [wyrażenie regularnego](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)), podać dwa razy takie same hasła (dla pewności, że użytkownik nie pomylił się, wpisując hasło), które są dłuższe niż 6 znaków oraz zaakceptować regulamin (sprawdzić, czy jest `checked`).

Jeśli warunki zostały spełnione, to w konsoli powinien pojawić się napis `done`. W przeciwnym razie należy zaznaczyć na czerwono kolor fontu dla `<label>` błędnie wprowadzonych danych.

Do rozwiązania problemu oznaczania błędnych elementów można użyć tablicy, która będzie przechowywać dane tj. `const errors = []`. W momencie wystąpienia błędów dodajemy do tej tablicy selektor elementu, który błędnie jest wypełniony.

Na samym końcu wykonujemy pętlę (`for` lub `forEach`), która zaznacza elementy z błędem.



&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
