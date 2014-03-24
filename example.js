var holidays = simply_pinky_date.make_calendar();
holidays.weekday("Saturday", 6).weekday("Sunday", 7);
holidays.anniversary("New Years Day", 1, 1);
holidays.anniversary("Epiphany", 6, 1);
holidays.easter_based("Good Friday", -2).easter_based("Easter Monday", 1);
holidays.anniversary("Labor Day", 1, 5);
holidays.easter_based("Ascension Day", 39);
holidays.easter_based("Pentecost", 50);
holidays.easter_based("Corpus Christi", 60);
holidays.anniversary("Unity Day", 3, 10);
holidays.anniversary("All Saints Day", 1, 11);
holidays.anniversary("Christmas", 25, 12).anniversary("Boxing Day", 26, 12);

// holidays.look_up(20, 4, 2014); => [ 'Sunday' ]
// holidays.look_up(21, 4, 2014); => [ 'Easter Monday' ]
// holidays.look_up(22, 4, 2014); => []
// holidays.look_up(1, 11, 2014); => [ 'Saturday', 'All Saints Day' ]
