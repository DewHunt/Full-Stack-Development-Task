@extends('backend.layouts.master_add_edit')

@section('page_content')
	<input class="form-control" type="hidden" name="userId" value="{{ $userInfo->id }}">
	<div class="row">
		<div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12">
		    <div class="row">
		        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"> 
		            <div class="form-group">
		                <label for="role">User Role</label>
		                <select class="form-control select2" name="role" required>
		                    <option value=""> Select Role</option>
		                    @foreach($userRoles as $role)
		                    	@php
		                    		if ($role->id == $userInfo->user_role_id) {
		                    			$select = "selected";
		                    		} else {
		                    			$select = "";
		                    		}
		                    		
		                    	@endphp
		                        <option value="{{ $role->id }}" {{ $select }}>{{ $role->name }}</option>
		                    @endforeach
		                </select>
		            </div>                                       
		        </div>

		        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">                 
		            <div class="form-group">
		                <label for="name">Name</label>
		                <input type="text" class="form-control form-control-danger" name="name" value="{{ $userInfo->name }}" required>
		            </div>                                       
		        </div>

		        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
		            <div class="form-group">
		                <label for="user-name">User Name</label>
		                <input type="text" class="form-control form-control-danger" name="username" value="{{ $userInfo->user_name }}" required>
		            </div>
		        </div>
		    </div>

		    <div class="row">
		        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"> 
		            <div class="form-group">
		                <label for="email">Email</label>
		                <input type="email" class="form-control form-control-danger" name="email" value="{{ $userInfo->email }}" required>
		            </div>                                       
		        </div>
		        
		        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
		            <div class="form-group">
		                <label for="user-image">User Image</label>
		                <input type="file" class="form-control" name="userImage">
		                <input type="hidden" class="form-control" name="previousUserImage" value="{{ $userInfo->image }}">
		            </div>
		        </div>
		    </div>
		</div>

		<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 text-center">
			<label for="image">Image</label>
			<div class="form-group">
				<img src="{{ asset($userInfo->image) }}" alt="User Image" width="150px" height="150px">
			</div>
		</div>
	</div>
@endsection