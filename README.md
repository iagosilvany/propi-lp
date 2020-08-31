# Propi Landing Page

Exported from Anima App!

Designed by: Bruno Arruda

### Self Instructions after exporting from Anima App:
- rename file `home.html` to `index.html` and all its dependencies;
- add Google Password to `contact.php` on line `$mail->Password` (server-side only);
- add `id='interessados_form'` on `formulario.html` -> `<form>` element;
- change to `action="#"` on `formulario.html` -> `<form>` element;
- add `<script src="lib/jQuery/jquery.min.js"></script>` on `formulario.html`;
- add `<script src="script.js"></script>` on `formulario.html`;
- add `id='btn_submit'` on `formulario.html` -> `<div class="overlap-group-nitdY1">` element;
- if there's an `<img>` after `btn_submit`, add this id to the img: `id="img_send"` on `formulario.html`;
- erase `javascript:animaSubmitForm('form4')` on -> `formulario.html` -> `<a href="javascript:animaSubmitForm('form4')">` element (or erase the whole `<a>` element);
- erase `<a>` element inside btn_submit on `formulario.html`
- make sure `<inputs>`'s names are: `name`, `email` and `phone` on `formulario.html`;

### Don't forget:
Run `composer install` after cloning it
