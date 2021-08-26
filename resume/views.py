from django.shortcuts import render

# Create your views here.
from django.core.mail import send_mail
from django.template.loader import render_to_string

#Importing library for popup messages
from django.contrib import messages

def HomeView(request):
    
    if request.POST:
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        descr = request.POST.get('message')
        

        recipient = "im.asif093@gmail.com"
        sender = email
        subject = "subject"
        message = render_to_string('resume/contactus.html',{
            "name": name,
            "message": descr,
        })
        send_mail(
            subject,
            message,
            sender, 
            [recipient],
            fail_silently=False,
            )
        # messages.success(request, "You message has been sent")
    return render(request,'resume/index.html')