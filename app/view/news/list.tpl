<!DOCTYPE html>
<html>
<head>
	<title>hacker news</title>
</head>
<body>
	<ul>
		{% for item in list %}
		<li>
			<a href="{{item.url}}">{{item.title}}-{{helper.relativeTime(item.time)}}</a>
		</li>
		{% endfor %}
	</ul>
</body>
</html>