<!DOCTYPE html>
<html lang="en">
	<head>
		@include('backend.includes.head')

		@include('backend.includes.head_assets')

		@yield('custom_css')
	</head>

	<body class="">
		<!-- [ Pre-loader ] start -->
		@include('backend.includes.preloader')
		<!-- [ Pre-loader ] End -->

		<!-- [ navigation menu ] start -->
		@include('backend.includes.menu')
		<!-- [ navigation menu ] end -->		

		<!-- [ Header ] start -->
		@include('backend.includes.top_navbar')
		<!-- [ Header ] end -->

		<!-- [ Main Content ] start -->
		<div class="pcoded-main-container">
			<div class="pcoded-wrapper">
				<div class="pcoded-content">
					<div class="pcoded-inner-content">
						<div class="main-body">
							<div class="page-wrapper">
                                @php
                                    $message = Session::get('msg');
                                    $error = Session::get('error');
                                @endphp

                                @if (isset($message))
                                    <div class="alert alert-success alert-dismissible">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        <strong>Success!</strong> {{ $message }}
                                    </div>
                                @endif

                                @if (isset($error))
                                    <div class="alert alert-danger alert-dismissible">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        <strong>Oops!</strong> {{ $error }}
                                    </div>
                                @endif

                                @php
                                    Session::forget('msg');
                                    Session::forget('error');
                                @endphp
                                
							    <div class="row">
							        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col">
							            <div class="card">
							                {{-- <div id="sticky-action" class="sticky-action"> --}}
							                    <div class="card-header">
							                        <div class="row align-items-center">
							                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
							                                <h5>{{ $title }}</h5>
							                            </div>
							                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right">
									                        <a class="btn btn-outline-info" href="{{ route($goBackLink) }}">
									                            <i class="far fa-hand-point-left"></i> Go Back
									                        </a> 
									                        @yield('view_additional_button')
							                            </div>
							                        </div>
							                    </div>
							                {{-- </div> --}}
							                <div class="card-body">
												<!-- [ Main Content ] start -->
												@yield('page_content')
												<!-- [ Main Content ] end -->
							                </div>
							            </div>
							        </div>
							    </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- [ Main Content ] end -->

		@include('backend.includes.footer_assets')

		@yield('custom_js')
	</body>
</html>
