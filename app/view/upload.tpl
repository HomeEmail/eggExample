<!DOCTYPE html>
<html>
<head>
	<title>upload file</title>
	<link rel="stylesheet" href="/public/css/base.css" />
</head>
<body>
	<h2>upload files</h2>
	<form id="form1" name="form1" method="POST" action="/upload?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
		title: <input name="title1" id="title1" type="text" /><br/>
		file1: <input name="file1" id="file1" type="file" /><br/>
		file2: <input name="file2" id="file2" type="file" /><br/>
		<button type="submit" id="submit" name="submit">Upload</button>
	</form>

	{% if list.length>0 %}
	<div>共上传了{{list.length}}个文件</div>
	<ul>
		{% for item in list %}
		<li>
			{{item.filename}}-{{item.filepath}}-{{item.mime}}
		</li>
		{% endfor %}
	</ul>
	{% endif %}


</body>
</html>