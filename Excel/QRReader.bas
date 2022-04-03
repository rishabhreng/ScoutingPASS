'module 5
Sub process1QRCodeInput()
    saveData (getInput())
End Sub

Sub process6QRCodeInput()
    saveData getInput(), "4"
    saveData getInput(), "5"
    saveData getInput(), "6"
    saveData getInput(), "7"
    saveData getInput(), "8"
    saveData getInput(), "9"
End Sub
Public Function getInput()
    getInput = InputBox("Scan QR Code", "Match Scouting Input")
End Function

Public Function ArrayLen(arr As Variant) As Integer
    ArrayLen = UBound(arr) - LBound(arr) + 1
End Function

Sub saveData(ByVal inp As String, Optional ByVal rowNum As String = "4")
    'CHANGE THIS FOR EVERY ENTRY FROM ROW 4-9 DEPENDING ON THE DATA ENTRY SHEET
    Dim fields
    Dim par
    Dim value
    Dim key
    Dim mapper
    Set mapper = CreateObject("Scripting.Dictionary")
    Dim valList As Object
    Set valList = CreateObject("System.Collections.ArrayList")
    Dim cellList As Object
    Set cellList = CreateObject("System.Collections.ArrayList")
    Set Data = CreateObject("Scripting.Dictionary")
    Dim tableName As String
    tableName = "ScoutingData"

    'Set up map fields for every year
    mapper.Add "cp", "Cargo Preloaded"
    mapper.Add "sp", "Starting Position"
    mapper.Add "at", "Taxi"
    mapper.Add "aca", "Auton Cargo Acquired"
    mapper.Add "au", "Auton Upper"
    mapper.Add "al", "Auton Lower"
    mapper.Add "acd", "Auton Cargo Dropped"
    mapper.Add "tca", "Teleop Cargo Acquired"
    mapper.Add "tu", "Teleop Upper"
    mapper.Add "tl", "Teleop Lower"
    mapper.Add "tcd", "Teleop Cargo Dropped"
    mapper.Add "dp", "Defensive Performance"
    mapper.Add "de", "Defensive Evasion"
    mapper.Add "ca", "Climb Attempt"
    mapper.Add "cl", "Climb Level"
    mapper.Add "f", "Fouls"
    mapper.Add "tf", "Technical Fouls"
    mapper.Add "co", "Comments"
    
    'terminates if there is no input
    If inp = "" Then
        Exit Sub
    End If

    'splits into pairs
    fields = Split(inp, ";")
    If ArrayLen(fields) > 0 Then
        Dim str

        'splits pairs
        For Each str In fields
            par = Split(str, "=")
            key = par(0)
            value = par(1)
            If mapper.Exists(key) Then
                key = mapper(key)
            End If
            valList.Add value
            Data.Add key, value
        Next
        
        
        'manual bash to put data where it needs to be in data entry sheet
        'note the switch in 1st and 2nd line, caused by accident in qr output, don't change
        Worksheets("Data Entry").Range("C" + rowNum) = valList.Item(8)
        Worksheets("Data Entry").Range("D" + rowNum) = valList.Item(0)
        Worksheets("Data Entry").Range("E" + rowNum) = valList.Item(9)
        Worksheets("Data Entry").Range("F" + rowNum) = valList.Item(10)
        Worksheets("Data Entry").Range("G" + rowNum) = valList.Item(11)
        Worksheets("Data Entry").Range("H" + rowNum) = valList.Item(12)
        Worksheets("Data Entry").Range("I" + rowNum) = valList.Item(13)
        Worksheets("Data Entry").Range("J" + rowNum) = valList.Item(14)
        Worksheets("Data Entry").Range("K" + rowNum) = valList.Item(15)
        Worksheets("Data Entry").Range("L" + rowNum) = valList.Item(16)
        Worksheets("Data Entry").Range("M" + rowNum) = valList.Item(17)
        Worksheets("Data Entry").Range("N" + rowNum) = valList.Item(18)
        Worksheets("Data Entry").Range("S" + rowNum) = valList.Item(19)
        Worksheets("Data Entry").Range("O" + rowNum) = valList.Item(20)
        Worksheets("Data Entry").Range("P" + rowNum) = valList.Item(21)
        Worksheets("Data Entry").Range("Q" + rowNum) = valList.Item(22)
        Worksheets("Data Entry").Range("R" + rowNum) = valList.Item(23)
        Call EnterNotes(valList.Item(3) & valList.Item(4) & " " & valList.Item(24), Range("A" & rowNum).value)
    End If
End Sub