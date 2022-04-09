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
    Set data = CreateObject("Scripting.Dictionary")
    Dim tableName As String
    tableName = "ScoutingData"
    Dim teleCargoAc As Integer

    'Set up map fields for every year
    mapper.Add "l", "l"
    mapper.Add "m", "m"
    mapper.Add "cp", "cp"
    mapper.Add "sl", "sl"
    mapper.Add "at", "at"
    mapper.Add "aca", "aca"
    mapper.Add "au", "au"
    mapper.Add "al", "al"
    mapper.Add "acd", "acd"
    mapper.Add "tca", "tca"
    mapper.Add "tu", "tu"
    mapper.Add "tl", "tl"
    mapper.Add "tcd", "tcd"
    mapper.Add "dp", "dp"
    mapper.Add "de", "de"
    mapper.Add "ca", "ca"
    mapper.Add "cl", "cl"
    mapper.Add "f", "f"
    mapper.Add "tf", "tf"
    mapper.Add "co", "co"
    mapper.Add "dt", "dt"
    
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
            data.Add key, value
        Next
        
        'manual bash to put data where it needs to be in data entry sheet
        'note the switch in 1st and 2nd line, caused by accident in qr output, don't change
        Worksheets("Data Entry").Range("C" + rowNum) = data.Item("sl")
        Worksheets("Data Entry").Range("D" + rowNum) = data.Item("cp")
        Worksheets("Data Entry").Range("E" + rowNum) = data.Item("at")
        Worksheets("Data Entry").Range("F" + rowNum) = data.Item("aca")
        Worksheets("Data Entry").Range("G" + rowNum) = data.Item("au")
        Worksheets("Data Entry").Range("H" + rowNum) = data.Item("al")
        Worksheets("Data Entry").Range("I" + rowNum) = data.Item("acd")
        Worksheets("Data Entry").Range("J" + rowNum) = CStr(CInt(data.Item("tu")) + CInt(data.Item("tl")) + CInt(data.Item("tcd")))
        Worksheets("Data Entry").Range("K" + rowNum) = data.Item("tu")
        Worksheets("Data Entry").Range("L" + rowNum) = data.Item("tl")
        Worksheets("Data Entry").Range("M" + rowNum) = data.Item("tcd")
        Worksheets("Data Entry").Range("N" + rowNum) = data.Item("dp")
        Worksheets("Data Entry").Range("O" + rowNum) = data.Item("de")
        Worksheets("Data Entry").Range("P" + rowNum) = data.Item("ca")
        Worksheets("Data Entry").Range("Q" + rowNum) = data.Item("cl")
        Worksheets("Data Entry").Range("R" + rowNum) = data.Item("f")
        Worksheets("Data Entry").Range("S" + rowNum) = data.Item("tf")
        
        If data.Item("dt") = 1 Then
            Call EnterNotes(data.Item("l") & data.Item("m") & "—died/tipped; " & data.Item("co"), Range("A" & rowNum).value)
        Else
           Call EnterNotes(data.Item("l") & data.Item("m") & "—" & data.Item("co"), Range("A" & rowNum).value)
        End If
    End If
End Sub

