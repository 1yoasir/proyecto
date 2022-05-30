@extends('layouts.app')

@section('content')
@if ( auth()->user()->role == 'ADM' )
<Appadmin></Appadmin>
@endif
<Appusuario></Appusuario>
@endsection