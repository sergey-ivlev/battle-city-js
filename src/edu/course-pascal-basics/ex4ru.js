if (!window.availableLangs['/src/edu/course-pascal-basics/ex4']) {
    window.availableLangs['/src/edu/course-pascal-basics/ex4'] = {};
}

window.availableLangs['/src/edu/course-pascal-basics/ex4']['ru'] = {
    'exercise-help-content': '<h1>Задача</h1>\
\
<p>В четвертом упражнении вам нужно объехать 3 цели. Но, как вы можете заметить, \
цели расположенны не хаотично и объехать их можно повторив три раза подряд одни и \
теже действия. Для этого существует оператор цикла:</p>\
\
<pre class="code">\n\
for переменная := значение1 to значение2 do\n\
  оператор;\n\
</pre>\n\
\
<p>Оператор for будет увеличивать значение переменной <b>переменная</b> на еденицу, \
начиная со значения1 и заканчивая значением2, каждый раз выполняя <b>оператор</b>, следующий за <b>do</b>. \
То есть, чтобы выполнить <b>оператор</b> 3 раза, нужно будет написать:</p>\
\
<pre class="code">\n\
for переменная := 1 to 3 do\n\
  оператор;\n\
</pre>\n\
\
<p>Но переменная <b>переменная</b> должна быть сначала объявлена, для этого сразу после \
строки <b>Program Program4;</b> нужно написать:</p>\
\
<pre class="code">\n\
var a: integer;\n\
</pre>\n\
<p>Тем самым мы определили переменную <b>a</b> и сам цикл можем записать в следующем виде:</p>\
\
<pre class="code">\n\
for a := 1 to 3 do\n\
  оператор;\n\
</pre>\n\
\
<p>Но нам в цикле нужно выполнить не один оператор, а несколько. Для этого можно объеденить \
группу операторов операторными скобками <b>begin</b> и <b>end</b>. В результате получим \
например такой вариант решения задания:</p>\
\
<pre class="code">\n\
Program Program4;\n\
var a: integer;\n\
begin\n\
  for a:=1 to 3 do begin\n\
    move(5);\n\
    turn(\'left\');\n\
    move(5);\n\
    turn(\'left\');\n\
    turn(\'left\');\n\
  end\n\
end.\n\
</pre>\n\
'
};