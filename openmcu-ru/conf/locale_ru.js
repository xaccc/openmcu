window.l_welcome = 'OpenMCU-ru';
window.l_status = 'Состояние';
window.l_connections = 'Подключения';
window.l_records = 'Видеозаписи';
window.l_control = 'Управление';
window.l_rooms = 'Комнаты';
window.l_invite = 'Позвонить';
window.l_invite_s = 'Вызов успешно выполнен';
window.l_invite_f = 'Вызов не выполнен';
window.l_settings = 'Настройки';
window.l_param_general = 'Основные';
window.l_param_access_rules = 'Правила доступа';
window.l_param_sip_proxy = 'SIP прокси-серверы';
window.l_help = 'Помощь';
window.l_forum = 'Форум'
window.l_manual = 'Документация';

window.l_info_welcome ='\
Окно <b>Parameters</b> позволяет задать общие параметры работы сервера. Все изменения сохраняются в файле (по умолчанию в .pwlib_config/.ini).<br />\
Окно <b>MCU Status</b> позволяет просматривать в реальном времени статистику и параметры подключения терминалов.<br />\
Окно <b>Invite user</b> предназначено для отправки приглашений в конференцию от OpenMCU на терминалы.<br/>\
Для подключения, в поле &laquo;Room Name&raquo; нужно указать имя конференции, \
к которой будет подключен терминал \
(для подключения к конференции по умолчанию нужно указать имя комнаты по умолчанию &mdash; <i>Default room</i> в настройках, обычно <b>room101</b>), \
в поле &laquo;Address&raquo; набрать IP-адрес \
(или номер при использовании гейткипера) \
подключаемого терминала и нажать кнопочку &laquo;Invite&raquo;. \
В результате на терминал уйдет вызов.<br />\
Окно <b>Room Control</b> предназначено для управления конференциями. Подробнее в инструкции.\
</p>\
<p>Конференция, созданная подключением первого терминала, изначально работает в неуправляемом режиме, при этом все участники конференции видят одинаковую картинку.\
В неуправляемом режиме OpenMCU автоматически меняет раскладку экрана в зависимости от количества подключенных пользователей в порядке, определённом в файле layouts.conf. После подключения 100 пользователей все последующие подключенные пользователи будут не видны на экранах терминалов, но будут видеть первых 100 пользователей.\
Звук в неуправляемом режиме передается и воспроизводится от всех подключенных участников.</p>';

window.l_info_invite ='\
Для подключения в поле Room Name нужно указать имя конференции\
к которой будет подключен терминал (для подключения к конференции\
по умолчанию нужно указать имя room101), в поле Address\
набрать IP адрес (или номер при использовании гейткипера)\
подключаемого терминала и нажать кнопочку Invite.\
В результате на терминал уйдет вызов.';

window.l_info_invite_f ='В запросе на подключение была допущена ошибка.';
window.l_info_invite_s ='Запрос на подключение успешно отправлен на удаленный терминал.';
window.l_info_rooms ='Выберите комнату для управления.';

window.l_info_control ='\
<div id=\'tip\' name=\'tip\'\
  onclick=\'if(typeof savedhelpcontent=="undefined"){savedhelpcontent=this.innerHTML;this.innerHTML="Эта страница предназначена для управления конференцией. Управление раскладкой позволяет выбрать видимых участников конференции и назначить им нужное расположение на экране. Для каждой позиции в раскладке можно явно указать видимого участника конференции, либо оставить позицию пустой, либо указать, что позиция выбрана для автоматической активации по голосовой активности.<br>За автоматическую активацию по голосовой активности отвечают два режима VAD и VAD2. Если позиции в раскладке назначить режим VAD, то это будет означать, что позицию может занять любой терминал, с которого идет активный звуковой сигнал.<br>Замена терминала на занятой VAD позиции возможна по истечении интервала Voice activation timeout.";}else {this.innerHTML=savedhelpcontent; try {delete savedhelpcontent;} catch(e){savedhelpcontent=undefined;};}\'\
>Эта страница предназначена для\
 <span style=\'cursor:pointer;font-weight:bold;color:#095\'> ...</span>\
</div>';

window.l_info_records ='\
Станица позволяет просматривать содержимое директории (на сервере),\
в которой сохранены записи видеоконференций, и скачивать видеозаписи.';

window.l_info_connections ='';
window.l_info_param_general ='';
window.l_info_param_access_rules ='';
window.l_info_param_sip_proxy ='';