@extends('backend.layouts.master_add_edit')

@section('page_content')
	<div class="row">
		<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			<label for="menu-link">Menu Action Type Name</label>
			<div class="form-group">
				<input type="text" class="form-control" id="name" name="name" placeholder="Menu Action Type Name" value="">
			</div>
		</div>

		<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			<label for="action-id">Action Id</label>
			<div class="form-group">
				<input type="number" class="form-control" id="actionId" name="actionId" min="1" placeholder="Action Id" value="{{ $actionId }}" required>
			</div>
		</div>
	</div>
@endsection