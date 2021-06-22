<?php

define("MYHOST","localhost");
define("MYUSER","root");
define("MYPASS","");




$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$adresse=$_POST['adresse'];
$email=$_POST['email'];
$telephone=$_POST['telephone'];
$password=$_POST['password'];

$requete="INSERT INTO `client`(`nom`, `prenom`, `adress_mail`,`password`,`tel`,`adress`) VALUES ('$nom','$prenom','$email','$password','$telephone','$adresse');";

$dbname="magasin";
$conn=mysqli_connect(MYHOST,MYUSER,MYPASS);
$db=mysqli_select_db($conn,$dbname);

$result=mysqli_query($conn,$requete);

if($result)
{ 
  header('Location: sign_in.html');
   
 }
else
 {
  header('Location: sign_up.html');

   }     
?>
