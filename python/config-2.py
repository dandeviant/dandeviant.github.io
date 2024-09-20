# Generate Cisco IOS port VLAN config

# Version 0.1 - kickstart (quick and simple)
# Features:
#  - Receives list of VLAN inputs and separate them, put into 48 ports by index
# How to use:
#  1. Write list of VLANs separated by spaces or tabs, Excel column data is not acceptable
#  2. Enter port numbering first digit, eg. Gi2/0/1 (which is 2) or Gi3/0/1 (which is 3)
#  3. Copy and paste the list into the VLAN input prompt.
#  4. Voila 

# port_first = input("Port naming first number: ")
# print("Port name: GigabitEthernet0/x" % (port_first))
vlan_input = input("Enter VLAN list:")
vlan_list = vlan_input.split()
vlan_count = len(vlan_list)
vlan_native = "0"

if "trunk" in vlan_list:
    vlan_native = input("Enter Native VLAN for Trunk:")

for x in range(vlan_count):
    if vlan_list[x] == "trunk":
        if vlan_list[x] == 0:
            print("exit")
        print("! ")
        print("default interface GigabitEthernet1/0/%s" % (x+1))
        print("interface GigabitEthernet1/0/%s" % (x+1))
        print(" description #ACCESSPOINT")
        print(" switchport trunk encapsulation dot1q")
        print(" switchport trunk native vlan %s" % (vlan_native))
        print(" switchport mode trunk")
        print(" switchport nonegotiate")
        print(" no logging event power-inline-status")
        print(" no snmp trap link-status")
        print(" mls qos trust dscp")
        print(" spanning-tree portfast edge trunk")
        print(" spanning-tree bpduguard enable")
        print(" ip dhcp snooping limit rate 100")
        print(" exit")
        print("! ")
    else:
        print("interface GigabitEthernet1/0/%s" % (x+1))
        print(" switchport access vlan %s" % (vlan_list[x]))
        print("! ")
