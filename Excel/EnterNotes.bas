'add to module 3
Sub EnterComments(commentInput As String, teamNum As String)

'First, go to that teams tab
    Sheets(teamNum).Select
'Second, find the word COMMENTS in column A
For iloop = 8 To 50
    CommentCell = Range("A" & Format(iloop)).value
    If CommentCell = "COMMENTS" Then
'Third, insert the comment at row
     Range("A" & Format(iloop + 1)).Select
     Selection.Insert
     ActiveCell.FormulaR1C1 = commentInput
    End If
Next

Sheets("Data Entry").Select
    End Sub
