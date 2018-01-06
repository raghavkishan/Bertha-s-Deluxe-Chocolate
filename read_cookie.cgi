#!/usr/bin/perl

use CGI;
use CGI::Cookie;


$q = new CGI;

#Sunku Ravindranath, Raghav Kishan
#Project #4
#Fall 2017
#820174908
#jadrn063


my $cookie = $q->cookie(-name=>'jadrn063',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bertha's Deluxe Chocolates</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://jadran.sdsu.edu/bootstrap/css/bootstrap.min.css">
    <script src="http://jadran.sdsu.edu/jquery/jquery.js" type="text/javascript"></script>
    <script type="text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script type="text/javascript" src="http://jadran.sdsu.edu/bootstrap/js/bootstrap.min.js" ></script>

    <!-- Developer Scripts-->
    <!-- Java Script-->
    <!--<script type="text/javascript" src="/home/jadrn063/public_html/proj4/js/main.js"></script>-->
    <script type="text/javascript" src="/home/jadrn063/public_html/proj4/js/products.js"></script>
    <script type="text/javascript" src="/home/jadrn063/public_html/proj4/js/shopping_cart.js"></script>
    <script type="text/javascript" src="/home/jadrn063/public_html/proj4/js/checkoutForm.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<!--
    Sunku Ravindranath, Raghav Kishan
    Project #4
    Fall 2017
    820174908
    jadrn063
-->
<body>

<div class="jumbotron">
  <h4 class="display-4">Thank you for Shopping with us!</h1>
  <hr class="my-4">
END_CONTENT
#
#my $v = $q->cookie('jadrn063');
#@rows = split('\|\|',$v);
#$str = "";
#foreach $row (@rows) {
#    ($sku, $qty) = split('\|',$row);
#}
#
#print $str;

#use DBI;
#
#
#my $host = "opatija.sdsu.edu";
#my $port = "3306";
#my $database = "proj4";
#my $username = "jadrn063";
#my $password = "sailboat";
#my $database_source = "dbi:mysql:$database:$host:$port";
#
#
#my $dbh = DBI->connect($database_source, $username, $password)
#    or die 'Cannot connect to db';
#
#my $sth = $dbh->prepare("SELECT sku, category, title, short_description, long_description, cost, retail FROM products order by category");
#$sth->execute();
#@queryRow=$sth->fetchrow_array();
#$arrySize = @queryRow;
#
#######################################################################################
#
#
##my %cookies = $ENV{COOKIE};
##for( keys %cookies) {
##    print "The value of the cookie is: $cookies{$_}\n";
##}
#
#my ($key, $value);
#@printOutputName;
#@printOutputQty;
#
##%cookies = CGI::Cookie->fetch;
##for(keys %cookies) {
##    print "$cookies{$_}\n";
##}
#
##print "<h1>Shopping cart cookie</h1>";
#my $v = $q->cookie('jadrn063');
##print "The raw cookie value is $v<br />";
#@rows = split('\|\|',$v);
#foreach $row (@rows) {
#    ($sku, $qty) = split('\|',$row);
#    for (my $i=0; $i <= $arrySize; $i++){
#        print "$sku<br/>";
#        if ($queryRow[0] == $sku){
#            print "$queryRow[0]\n";
#            print "$queryRow[2]\n";
#            push @printOutputName, $queryRow[2];
#            push @printOutputQty, $qty;
#        }
#    }
#}
#
#print "<table class = \"table\">\n";
#print "<thead>\n";
#print "<tr>\n";
#print "<th scope=\"col\">Item</th>\n";
#print "<th scope=\"col\">Quantity</th>\n";
#print "</thead>\n";
#print "</tr>\n";
#print "<tbody>\n";
#
#$finalLength = @printOutputQty;
#for (my $i=0; $i< $finalLength; $i++){
#    print "<tr>\n";
#    print "<td>$printOutputName[i]</td>\n";
#    print "<td>$printOutputQty[i]</td>\n";
#    print "</tr>\n";
#}
#
#print "</tbody>\n";
#print "</table>\n";

#print "<h1>Parameters passed to script:</h1>\n";
my %h = $q->Vars;

print "<h3 class = \"font-weight-bold\">$h{FirstName},$h{LastName}</h3>";
print "<h3 class = \"text-primary font-italic my-3\">Your Items will be shipped to:</h3>";
print "<h4 class = \"font-weight-bold\">$h{AddressLine1}</h4>";
print "<h4 class = \"font-weight-bold\">$h{AddressLine2}</h4>";
print "<h4 class = \"font-weight-bold\">$h{CityTown},$h{State},$h{ZipCode}</h4>";
print "<h3 class = \"text-primary font-italic my-3\">Payment Information:</h3>";
print "<h4 class = \"font-weight-bold\">Name:$h{NameOnCard}</h4>";
my $card = substr $h{CardNumber}, -4, 4;
print "<h4 class = \"font-weight-bold\">Card number:XXXXXXXXXXXX$card</h4>";




print <<END_CONTENT;
    <a class = "btn btn-outline-primary my-3" id='continueShopping' href='http://jadran.sdsu.edu/~jadrn063/proj4/index.html'>Continue Shopping</a>
    </div>

END_CONTENT
