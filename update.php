<?php
$hostname_irms = "localhost";
$database_irms = "IRO";
$username_irms = "csdila";
$password_irms = "Pub1csdi";
$irms = mysqli_connect($hostname_irms, $username_irms, $password_irms,$database_irms); 

$t1=strval($_GET['t1']);
$t2=strval($_GET['t2']);
$t3=strval($_GET['t3']);
$t4=strval($_GET['t4']);
$t5=strval($_GET['t5']);
$t6=strval($_GET['t6']);
$t7=strval($_GET['t7']);
$t8=strval($_GET['t8']);
$t9=strval($_GET['t9']);
$t10=strval($_GET['t10']);
$t11=strval($_GET['t11']);
$t12=strval($_GET['t12']);
$t13=strval($_GET['t13']);
$t14=strval($_GET['t14']);
$t15=strval($_GET['t15']);
$t16=strval($_GET['t16']);
$t17=strval($_GET['t17']);
$t18=strval($_GET['t18']);
$t19=strval($_GET['t19']);
$t20=strval($_GET['t20']);
$t21=strval($_GET['t21']);
$t22=strval($_GET['t22']);
$t23=strval($_GET['t23']);
$t24=strval($_GET['t24']);
$t25=strval($_GET['t25']);
$t26=strval($_GET['t26']);
$t27=strval($_GET['t27']);
$t28=strval($_GET['t28']);
$t29=strval($_GET['t29']);
$t30=strval($_GET['t30']);
$t31=strval($_GET['t31']);
$t32=strval($_GET['t32']);
$t33=strval($_GET['t33']);
$t34=strval($_GET['t34']);
$t35=strval($_GET['t35']);

$query = "INSERT INTO `questionnaire` (`t1`, `t2`, `t3`,`t4`,`t5`,`t6`,`t7`,`t8`,`t9`,`t10`,`t11`,`t12`,`t13`,`t14`,`t15`,`t16`,`t17`,`t18`,`t19`,`t20`,`t21`,`t22`,`t23`,`t24`,`t25`,`t26`,`t27`,`t28`,`t29`,`t30`,`t31`,`t32`,`t33`,`t34`,`t35`) VALUES ('{$t1}','{$t2}','{$t3}','{$t4}','{$t5}','{$t6}','{$t7}','{$t8}','{$t9}','{$t10}','{$t11}','{$t12}','{$t13}','{$t14}','{$t15}','{$t16}','{$t17}','{$t18}','{$t19}','{$t20}','{$t21}','{$t22}','{$t23}','{$t24}','{$t25}','{$t26}','{$t27}','{$t28}','{$t29}','{$t30}','{$t31}','{$t32}','{$t33}','{$t34}','{$t35}')";

 if (mysqli_multi_query($irms, $query)) {
    $p= "Thank you!";
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($irms);
} 

?>