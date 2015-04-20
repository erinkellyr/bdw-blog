{% extends 'layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>

	<ul>
	{% for article in articles %}
	 <li><a href="/article/{{ article.id }}">{{ article.title }}</a></li>
	{% endfor %}
	</ul>
	

{% endblock %}